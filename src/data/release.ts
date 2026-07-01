// Informações da última release publicada no GitHub. Buscadas em tempo de build
// (para a página nascer já com a versão certa e funcionar sem JS) e atualizadas
// no cliente por RefreshReleaseScript.astro (para ficar sempre na última, mesmo
// sem rebuild). Se a API do GitHub falhar no build, usamos o FALLBACK abaixo.

export const REPO = 'Yg0rAndrade/carcara-code';
export const RELEASES_URL = `https://github.com/${REPO}/releases`;
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
}

// Valor usado se a API estiver indisponível no build. Mantenha alinhado com a
// última release conhecida — o cliente corrige automaticamente se houver outra.
export const FALLBACK: ReleaseInfo = {
  version: '0.1.3',
  tag: 'v0.1.3',
  downloadUrl:
    'https://github.com/Yg0rAndrade/carcara-code/releases/download/v0.1.3/CarcaraCode-Setup-0.1.3.exe',
  fileName: 'CarcaraCode-Setup-0.1.3.exe',
  size: '109,6 MB',
  date: '30 jun 2026',
  releaseUrl: 'https://github.com/Yg0rAndrade/carcara-code/releases/tag/v0.1.3',
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
  return {
    version: tag.replace(/^v/i, ''),
    tag,
    downloadUrl: exe.browser_download_url,
    fileName: exe.name,
    size: formatSize(exe.size),
    date: formatDate(r.published_at),
    releaseUrl: r.html_url,
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
