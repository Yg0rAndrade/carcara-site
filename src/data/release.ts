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
  /** URL direta do instalador .exe (Windows) */
  downloadUrl: string;
  /** nome do arquivo Windows, ex.: "CarcaraCode-Setup-0.1.3.exe" */
  fileName: string;
  /** tamanho formatado em pt-BR do .exe, ex.: "109,6 MB" */
  size: string;
  /** data de publicação formatada, ex.: "30 jun 2026" */
  date: string;
  /** página da release no GitHub */
  releaseUrl: string;
  /** URL direta do .dmg de Apple Silicon (arm64); cai na página da release se faltar */
  macUrl: string;
  /** tamanho do .dmg Apple Silicon (ou '' se desconhecido) */
  macSize: string;
  /** URL direta do .dmg de Intel (x64); cai na página da release se faltar */
  macIntelUrl: string;
  /** tamanho do .dmg Intel (ou '' se desconhecido) */
  macIntelSize: string;
  /** URL direta do .AppImage de Linux; cai na página da release se faltar */
  linuxUrl: string;
  /** tamanho do .AppImage (ou '' se desconhecido) */
  linuxSize: string;
}

// Valor usado se a API estiver indisponível no build. Mantenha alinhado com a
// última release conhecida, o cliente corrige automaticamente se houver outra.
export const FALLBACK: ReleaseInfo = {
  version: '0.1.14',
  tag: 'v0.1.14',
  downloadUrl:
    'https://github.com/Yg0rAndrade/carcara-code/releases/download/v0.1.14/CarcaraCode-Setup-0.1.14.exe',
  fileName: 'CarcaraCode-Setup-0.1.14.exe',
  size: '129,5 MB',
  date: '5 set 2026',
  releaseUrl: 'https://github.com/Yg0rAndrade/carcara-code/releases/tag/v0.1.14',
  macUrl:
    'https://github.com/Yg0rAndrade/carcara-code/releases/download/v0.1.14/CarcaraCode-0.1.14-arm64.dmg',
  macSize: '189,4 MB',
  // v0.1.14 não publicou build Intel (x64); vazio esconde o card na página de download.
  macIntelUrl: '',
  macIntelSize: '',
  linuxUrl:
    'https://github.com/Yg0rAndrade/carcara-code/releases/download/v0.1.14/CarcaraCode-0.1.14.AppImage',
  linuxSize: '171,6 MB',
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
  const assets: any[] = r.assets || [];
  const exe = assets.find(
    (a: any) => /\.exe$/i.test(a.name) && !/\.blockmap$/i.test(a.name)
  );
  if (!exe) return null;
  // Mac: preferimos o build de Apple Silicon (arm64). Se não houver, qualquer .dmg.
  const macArm =
    assets.find((a: any) => /arm64\.dmg$/i.test(a.name)) ||
    assets.find((a: any) => /\.dmg$/i.test(a.name));
  // Mac Intel: só um asset x64 explícito conta. Sem ele (ex.: release só com
  // arm64), fica vazio pra a página de download não mostrar um card sem download.
  const macIntel = assets.find((a: any) => /x64\.dmg$/i.test(a.name));
  const linux = assets.find((a: any) => /\.AppImage$/i.test(a.name));
  const tag: string = r.tag_name;
  return {
    version: tag.replace(/^v/i, ''),
    tag,
    downloadUrl: exe.browser_download_url,
    fileName: exe.name,
    size: formatSize(exe.size),
    date: formatDate(r.published_at),
    releaseUrl: r.html_url,
    // Sem asset da plataforma, mandamos pra página da release (usuário escolhe manualmente).
    macUrl: macArm ? macArm.browser_download_url : r.html_url,
    macSize: macArm ? formatSize(macArm.size) : '',
    // Vazio (não a página da release) quando não há build Intel: o card some.
    macIntelUrl: macIntel ? macIntel.browser_download_url : '',
    macIntelSize: macIntel ? formatSize(macIntel.size) : '',
    linuxUrl: linux ? linux.browser_download_url : r.html_url,
    linuxSize: linux ? formatSize(linux.size) : '',
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
