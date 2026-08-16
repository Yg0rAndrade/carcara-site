// Informações da última release publicada no GitHub. Buscadas em tempo de build
// (para a página nascer já com a versão certa e funcionar sem JS) e atualizadas
// no cliente por RefreshReleaseScript.astro (para ficar sempre na última, mesmo
// sem rebuild). Se a API do GitHub falhar no build, usamos o FALLBACK abaixo.

export const REPO = 'Yg0rAndrade/carcara-code';
export const RELEASES_URL = `https://github.com/${REPO}/releases`;
/** Página da última release (usada pro download de Linux, sem asset fixo pra apontar direto). */
export const LATEST_RELEASE_URL = `${RELEASES_URL}/latest`;
export const LATEST_API = `https://api.github.com/repos/${REPO}/releases/latest`;

export interface ReleaseInfo {
  /** versão sem o "v", ex.: "0.1.3" */
  version: string;
  /** tag completa, ex.: "v0.1.3" */
  tag: string;
  /** URL direta do instalador .exe */
  downloadUrl: string;
  /** nome do arquivo, ex.: "CarcaraCode-Setup-0.1.3.exe" */
  fileName: string;
  /** tamanho formatado em pt-BR, ex.: "109,6 MB" */
  size: string;
  /** data de publicação formatada, ex.: "30 jun 2026" */
  date: string;
  /** página da release no GitHub */
  releaseUrl: string;
  /** URL direta do DMG para Apple Silicon, quando publicado */
  macDownloadUrl?: string;
  /** nome do DMG para Apple Silicon */
  macFileName?: string;
  /** tamanho formatado do DMG para Apple Silicon */
  macSize?: string;
}

// Valor usado se a API estiver indisponível no build. Mantenha alinhado com a
// última release conhecida, o cliente corrige automaticamente se houver outra.
export const FALLBACK: ReleaseInfo = {
  version: '0.1.12',
  tag: 'v0.1.12',
  downloadUrl:
    'https://github.com/Yg0rAndrade/carcara-code/releases/download/v0.1.12/CarcaraCode-Setup-0.1.12.exe',
  fileName: 'CarcaraCode-Setup-0.1.12.exe',
  size: '129,5 MB',
  date: '13 ago 2026',
  releaseUrl: 'https://github.com/Yg0rAndrade/carcara-code/releases/tag/v0.1.12',
  macDownloadUrl:
    'https://github.com/Yg0rAndrade/carcara-code/releases/download/v0.1.12/CarcaraCode-0.1.12-arm64.dmg',
  macFileName: 'CarcaraCode-0.1.12-arm64.dmg',
  macSize: '158,6 MB',
};

const MESES = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

/** Formata bytes em "X,Y MB" no padrão pt-BR. */
export function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return mb.toFixed(1).replace('.', ',') + ' MB';
}

/** Formata uma data ISO em "DD mês AAAA" (ex.: "30 jun 2026"). */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getUTCDate()} ${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** Normaliza a resposta da API do GitHub para o nosso ReleaseInfo. */
export function parseRelease(r: any): ReleaseInfo | null {
  if (!r || !r.tag_name) return null;
  const exe = (r.assets || []).find(
    (a: any) => /\.exe$/i.test(a.name) && !/\.blockmap$/i.test(a.name)
  );
  if (!exe) return null;
  const tag: string = r.tag_name;
  const macArm64 = (r.assets || []).find(
    (a: any) => /\.dmg$/i.test(a.name) && /(arm64|aarch64|apple[-_ ]?silicon)/i.test(a.name)
  );
  return {
    version: tag.replace(/^v/i, ''),
    tag,
    downloadUrl: exe.browser_download_url,
    fileName: exe.name,
    size: formatSize(exe.size),
    date: formatDate(r.published_at),
    releaseUrl: r.html_url,
    ...(macArm64
      ? {
          macDownloadUrl: macArm64.browser_download_url,
          macFileName: macArm64.name,
          macSize: formatSize(macArm64.size),
        }
      : {}),
  };
}

/** Busca a última release no build; cai no FALLBACK em qualquer erro. */
async function fetchLatest(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(LATEST_API, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'carcara-code-site',
      },
    });
    if (!res.ok) return FALLBACK;
    const parsed = parseRelease(await res.json());
    return parsed ?? FALLBACK;
  } catch {
    return FALLBACK;
  }
}

export const release: ReleaseInfo = await fetchLatest();
