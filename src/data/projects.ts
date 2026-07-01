// Lista de projetos exibida no "rail" (a barra de ícones) tanto no Hero quanto
// no mock da IDE. O rail cicla o projeto ativo a cada CYCLE_MS no cliente.
export interface Project {
  /** nome do projeto (subpasta) */
  name: string;
  /** cor de destaque do ícone quando ativo */
  color: string;
}

export const projects: Project[] = [
  { name: 'site-loja', color: '#D99748' },
  { name: 'api-pedidos', color: '#E4641A' },
  { name: 'blog-axe', color: '#D7A516' },
  { name: 'app-mobile', color: '#D2645E' },
  { name: 'infra', color: '#5BA86B' },
  { name: 'joia-mistica', color: '#4E86C6' },
];

/** intervalo, em ms, entre cada troca de projeto ativo no rail */
export const CYCLE_MS = 2400;

/** primeira letra maiúscula usada como rótulo do ícone */
export function letterOf(name: string): string {
  return name[0].toUpperCase();
}

/**
 * Monta o `style` inline de um ícone de projeto. Usado no SSR (estado inicial)
 * e replicado no script de cliente para animar a troca — manter os dois em sync.
 */
export function iconStyle(color: string, active: boolean): string {
  return [
    'width:42px',
    'height:42px',
    'border-radius:11px',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    "font-family:'Hanken Grotesk',sans-serif",
    'font-weight:800',
    'font-size:17px',
    `color:${active ? '#fff' : color}`,
    `background:${active ? color : '#fff'}`,
    `border:1.5px solid ${active ? color : '#E7E0D2'}`,
    `box-shadow:${active ? '0 5px 14px ' + color + '66' : '0 1px 2px rgba(0,0,0,0.04)'}`,
    `transform:${active ? 'scale(1.06)' : 'scale(1)'}`,
    'transition:all .3s',
  ].join('; ');
}
