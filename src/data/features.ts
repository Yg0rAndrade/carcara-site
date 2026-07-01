// Recursos do Carcará Code exibidos no "showcase" do Hero. Um recurso fica em
// destaque por vez (holofote) e a lista abaixo mostra todos, ciclando. Fonte
// única usada no SSR (estado inicial) e no script de cliente que anima a troca.

export interface Feature {
  /** rótulo curto na lista */
  label: string;
  /** título no holofote */
  title: string;
  /** descrição no holofote */
  desc: string;
  /** cor de destaque (ícone + realce da linha ativa) */
  color: string;
  /** conteúdo interno do <svg> (traço, stroke=currentColor) */
  icon: string;
}

export const FEATURE_CYCLE_MS = 2600;

export const features: Feature[] = [
  {
    label: 'Rail de projetos',
    title: 'Um ícone por projeto',
    desc: 'Cada pasta vira um atalho no rail. Bateu o olho, achou o projeto e trocou num clique.',
    color: '#D99748',
    icon: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  },
  {
    label: 'Chat multi-IA',
    title: 'Feito pro Claude Code',
    desc: 'É a opção padrão — e por projeto você troca por OpenCode, Codex, Antigravity ou seu próprio CLI.',
    color: '#E4641A',
    icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  },
  {
    label: 'Preview ao vivo',
    title: 'Seu site do lado',
    desc: 'A IDE detecta o servidor de dev, sobe sozinha e mostra seu site embutido enquanto você conversa.',
    color: '#5BA86B',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
  },
  {
    label: 'Código · Git',
    title: 'Código e Git embutidos',
    desc: 'Veja os arquivos, o diff de cada mudança e versione o projeto sem sair da IDE.',
    color: '#4E86C6',
    icon: '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  },
  {
    label: 'API · MCP · Board',
    title: 'As ferramentas à mão',
    desc: 'API, MCP, histórico e um board — o que você usa pra trabalhar, ali do lado do chat.',
    color: '#C5821C',
    icon: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
  },
];

/** monta um <svg> de traço com o ícone do recurso */
export function featSvg(inner: string, size: number): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}
