// Lista de projetos exibida no "rail" (a barra de ícones) tanto no Hero quanto
// no mock da IDE. O rail cicla o projeto ativo a cada CYCLE_MS no cliente e, a
// cada troca, muda junto o nome, a cor de destaque, a CONVERSA no chat (com um
// número variável de balões) e a DISPOSIÇÃO do preview — cada projeto tem seu
// próprio "cenário". Os renderizadores abaixo são a fonte única desses cenários:
// o IdeWindow usa no SSR (estado inicial) e o ProjectRailScript replica no
// cliente ao trocar. Mantém tudo em sync.

/** um balão da conversa do chat */
export interface ChatBubble {
  /** quem fala: pedido do usuário ou resposta do Claude */
  role: 'user' | 'assistant';
  text: string;
  /** arquivo tocado (mostra o badge com o diff) — só nas respostas */
  file?: string;
  /** linhas adicionadas / removidas no badge */
  add?: number;
  del?: number;
}

/** disposição do preview renderizado (cada projeto tem a sua) */
export type PreviewLayout = 'store' | 'api' | 'blog' | 'mobile' | 'infra' | 'gem';

export interface Project {
  /** nome do projeto (subpasta) */
  name: string;
  /** cor de destaque do ícone quando ativo */
  color: string;
  /** conversa exibida no chat (1 a 3 balões, variando por projeto) */
  chat: ChatBubble[];
  /** layout do preview ao vivo */
  preview: PreviewLayout;
}

export const projects: Project[] = [
  {
    name: 'site-loja',
    color: '#D99748',
    preview: 'store',
    chat: [
      { role: 'user', text: 'adiciona um carrinho na home e sobe o preview' },
      {
        role: 'assistant',
        text: 'Feito! Carrinho na home e preview no ar.',
        file: 'src/Home.jsx',
        add: 38,
        del: 4,
      },
    ],
  },
  {
    name: 'api-pedidos',
    color: '#E4641A',
    preview: 'api',
    chat: [
      { role: 'user', text: 'cria o endpoint POST /pedidos com validação' },
      {
        role: 'assistant',
        text: 'Rota e schema Zod prontos.',
        file: 'src/routes/pedidos.ts',
        add: 54,
        del: 3,
      },
      { role: 'user', text: 'agora escreve os testes' },
    ],
  },
  {
    name: 'blog-axe',
    color: '#D7A516',
    preview: 'blog',
    chat: [
      { role: 'user', text: 'escreve um post sobre axé e cultura popular' },
    ],
  },
  {
    name: 'app-mobile',
    color: '#D2645E',
    preview: 'mobile',
    chat: [
      { role: 'user', text: 'deixa o layout 100% responsivo no mobile' },
      {
        role: 'assistant',
        text: 'Pronto — breakpoints e menu ajustados.',
        file: 'src/App.tsx',
        add: 27,
        del: 5,
      },
    ],
  },
  {
    name: 'infra',
    color: '#5BA86B',
    preview: 'infra',
    chat: [
      { role: 'user', text: 'sobe o deploy pra produção' },
      {
        role: 'assistant',
        text: 'Deploy no ar. Health check verde.',
        file: 'infra/deploy.yml',
        add: 12,
        del: 1,
      },
      { role: 'user', text: 'acompanha os logs em tempo real' },
    ],
  },
  {
    name: 'joia-mistica',
    color: '#4E86C6',
    preview: 'gem',
    chat: [
      { role: 'user', text: 'cria a página de coleção com galeria' },
      {
        role: 'assistant',
        text: 'Galeria pronta em grid responsivo.',
        file: 'src/Collection.jsx',
        add: 64,
        del: 0,
      },
    ],
  },
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

// ---------------------------------------------------------------------------
// Renderizadores compartilhados (SSR + cliente): conversa do chat e preview.
// Devolvem strings de HTML usadas com `set:html` (SSR) e `innerHTML` (cliente).
// ---------------------------------------------------------------------------

/** logotipo do Carcará (mesmo path do CarcaraLogo.astro) para o avatar do bot */
const CARCARA_PATH =
  'M371.733 46.2668L371.333 92.6669L349.333 92.8003C337.2 92.8003 316.4 93.0669 303.067 93.0669L278.667 93.3336V139.334V185.334H185.333H92V231.334V277.334H46H0V422V566.667H46H92V521.334V476H185.333H278.667V792.667V1109.33H325.333H372V1154.67V1200H418.667H465.333V1245.33V1290.67L511.733 1290.93L558 1291.33L558.4 1471.6L558.667 1652H488.667H418.667V1682V1712H395.333H372V1752V1792H406.667H441.333V1768V1744H464.667H488V1789.33V1834.67H523.333H558.667V1789.33V1744H605.333H652V1768V1792H698H744V1752V1712H698H652V1592V1472H698.4H744.667L744.533 1427.33V1382.67H837.6H930.667V1427.33V1472H976.667H1022.67V1562V1652H954H885.333V1682V1712H861.333H837.333V1752V1792H872H906.667V1768V1744H930.667H954.667V1789.33V1834.67H989.333H1024V1789.33V1744H1070H1116V1768V1792H1162.67H1209.33V1752V1712H1162.67H1116V1547.33V1382.67H1162.67H1209.33V1427.33V1472H1349.33H1489.33V1381.33V1290.67H1442.67H1396V1155.33V1020H1350H1304L1303.73 929.6L1303.33 839.334L1257.07 838.934L1210.67 838.667L1210.4 793.6L1210 748.667L1163.07 748.267L1116 748V702V656H1070H1024V611.334V566.667H977.333H930.667V422V277.334H884H837.333V231.334V185.334H884H930.667V92.6669V0.000244141H651.333H372L371.733 46.2668ZM465.067 232.267L465.333 278.667H512H558.667V232V185.334H651.333H744V232V278.667H790.667H837.333V467.334V656L744.533 656.267L651.733 656.667L651.867 702.267L652 748H512H372V612V476H418.667H465.333V423.334V370.667H418.667H372V324V277.334H325.333H278.667V232.267C278.667 207.467 279.067 186.667 279.6 186.267C280 185.734 321.867 185.467 372.533 185.6L464.667 186L465.067 232.267Z';

const carcaraSvg = (size: number) =>
  `<svg width="${size}" height="${size}" style="fill:#D99748" viewBox="0 0 1490 1835"><path d="${CARCARA_PATH}"></path></svg>`;

/** monta a lista de balões da conversa (1 a 3, conforme o projeto) */
export function renderChat(p: Project): string {
  return p.chat
    .map((m) => {
      if (m.role === 'user') {
        return `<div style="align-self:flex-end; max-width:80%; background:#D99748; color:#211C15; padding:10px 13px; border-radius:13px 13px 4px 13px; font-size:13px; line-height:1.45;">${m.text}</div>`;
      }
      const badge =
        m.file != null
          ? `<span style="display:inline-flex; align-items:center; gap:6px; margin-top:8px; font-family:'JetBrains Mono',monospace; font-size:11px; color:#8A8073; background:#FCFAF5; border:1px solid #E7E0D2; padding:3px 8px; border-radius:6px;">${m.file} <span style="color:#5BA86B;">+${m.add ?? 0}</span> <span style="color:#E4641A;">−${m.del ?? 0}</span></span>`
          : '';
      return `<div style="display:flex; gap:9px; align-items:flex-start; max-width:90%;"><span style="flex:none; width:26px;height:26px;border-radius:8px; background:#F3EEE4; border:1px solid #E7E0D2; display:grid; place-items:center;">${carcaraSvg(15)}</span><div style="background:#F3EEE4; color:#3a342b; padding:10px 13px; border-radius:13px 13px 13px 4px; font-size:13px; line-height:1.5;">${m.text}${badge}</div></div>`;
    })
    .join('');
}

/** monta o corpo do preview conforme o layout do projeto — cada projeto vira um
 *  mini-site "de verdade": conteúdo mocado, mas com cara de site real (topo,
 *  produtos, artigo, dashboard…). Tudo em fonte pequena pra caber no preview. */
export function renderPreview(p: Project): string {
  const c = p.color;
  const ink = '#211C15';
  const muted = '#8A8073';
  const soft = '#FBF8F1';
  const bd = '#EFE8DA';
  const wrap = (inner: string, gap = 9) =>
    `<div style="display:flex; flex-direction:column; gap:${gap}px; flex:1; min-height:0;">${inner}</div>`;

  switch (p.preview) {
    case 'store': {
      const bar = `<div style="display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:6px;"><span style="width:19px;height:19px;border-radius:6px;background:${c};display:grid;place-items:center;font-size:11px;">🛍️</span><span style="font-family:'Hanken Grotesk',sans-serif;font-weight:800;font-size:11px;color:${ink};">Bazar Carcará</span></div><span style="font-family:'JetBrains Mono',monospace;font-size:8px;color:${muted};background:${soft};border:1px solid ${bd};padding:3px 7px;border-radius:999px;">🛒 2 · R$ 348</span></div>`;
      const banner = `<div style="border-radius:9px;background:linear-gradient(100deg,${c},${c}cc);color:#fff;padding:8px 11px;display:flex;align-items:center;justify-content:space-between;"><div><div style="font-family:'Hanken Grotesk',sans-serif;font-weight:800;font-size:10px;">Frete grátis acima de R$199</div><div style="font-size:8px;opacity:.85;">Só esta semana</div></div><span style="font-size:16px;">🔥</span></div>`;
      const prod = (emoji: string, name: string, price: string) =>
        `<div style="border:1px solid ${bd};border-radius:9px;background:#fff;padding:7px;display:flex;flex-direction:column;gap:5px;min-width:0;"><div style="height:38px;border-radius:6px;background:${c}14;display:grid;place-items:center;font-size:21px;">${emoji}</div><div style="font-family:'Hanken Grotesk',sans-serif;font-weight:700;font-size:9px;color:${ink};line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</div><div style="display:flex;align-items:center;justify-content:space-between;"><span style="font-family:'Hanken Grotesk',sans-serif;font-weight:800;font-size:10px;color:${c};">${price}</span><span style="width:17px;height:17px;border-radius:6px;background:${c};color:#fff;display:grid;place-items:center;font-size:12px;line-height:1;">+</span></div></div>`;
      const grid = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">${prod('👟', 'Tênis Retrô', 'R$199')}${prod('🎧', 'Fone Bluetooth', 'R$149')}${prod('🕶️', 'Óculos de Sol', 'R$89')}${prod('⌚', 'Smartwatch', 'R$259')}</div>`;
      return wrap(`${bar}${banner}${grid}`);
    }
    case 'api': {
      const bar = `<div style="display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:6px;"><span style="width:19px;height:19px;border-radius:6px;background:${c};display:grid;place-items:center;font-size:10px;">⚡</span><span style="font-family:'Hanken Grotesk',sans-serif;font-weight:800;font-size:11px;color:${ink};">API Pedidos</span></div><span style="display:inline-flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:8px;color:${muted};"><span style="width:6px;height:6px;border-radius:50%;background:#5BA86B;"></span>v1 · REST</span></div>`;
      const ep = (m: string, mc: string, path: string, code: string) =>
        `<div style="display:flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;"><span style="font-size:8px;font-weight:700;color:#fff;background:${mc};padding:2px 0;border-radius:4px;width:34px;text-align:center;">${m}</span><span style="font-size:9px;color:${ink};flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${path}</span><span style="font-size:8px;color:#5BA86B;">${code}</span></div>`;
      const list = `<div style="border:1px solid ${bd};border-radius:9px;background:#fff;padding:9px 10px;display:flex;flex-direction:column;gap:8px;">${ep('POST', '#E4641A', '/pedidos', '201')}${ep('GET', '#5BA86B', '/pedidos/:id', '200')}${ep('GET', '#5BA86B', '/pedidos', '200')}${ep('DEL', '#D2645E', '/pedidos/:id', '204')}</div>`;
      const json = `<div style="border-radius:9px;background:#2b2620;padding:9px 11px;font-family:'JetBrains Mono',monospace;font-size:8.5px;line-height:1.5;"><div style="color:#8A8073;margin-bottom:2px;">200 · GET /pedidos/1042</div><div style="color:#cfc6b6;">{</div><div style="color:#cfc6b6;padding-left:11px;">"id": <span style="color:#D99748;">1042</span>,</div><div style="color:#cfc6b6;padding-left:11px;">"status": <span style="color:#7bbf87;">"pago"</span>,</div><div style="color:#cfc6b6;padding-left:11px;">"total": <span style="color:#D99748;">199.90</span></div><div style="color:#cfc6b6;">}</div></div>`;
      return wrap(`${bar}${list}${json}`);
    }
    case 'blog': {
      const bar = `<div style="display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:6px;"><span style="width:19px;height:19px;border-radius:6px;background:${c};display:grid;place-items:center;font-size:10px;">📰</span><span style="font-family:'Hanken Grotesk',sans-serif;font-weight:800;font-size:11px;color:${ink};">Blog do Axé</span></div><span style="font-family:'JetBrains Mono',monospace;font-size:8px;color:${muted};">Cultura · Música</span></div>`;
      const article = `<div style="flex:1;border:1px solid ${bd};border-radius:10px;background:#fff;padding:12px;display:flex;flex-direction:column;gap:7px;"><span style="align-self:flex-start;font-family:'JetBrains Mono',monospace;font-size:7px;font-weight:700;letter-spacing:.05em;color:${c};background:${c}18;padding:3px 7px;border-radius:999px;">CULTURA POPULAR</span><div style="font-family:'Instrument Serif',serif;font-size:16px;line-height:1.1;color:${ink};">Axé: a energia que move a Bahia</div><div style="display:flex;align-items:center;gap:6px;"><span style="width:16px;height:16px;border-radius:50%;background:${c}22;display:grid;place-items:center;font-size:9px;">🥁</span><span style="font-family:'Hanken Grotesk',sans-serif;font-size:8px;color:${muted};">por Dandara Nunes · 12 jun · 4 min</span></div><p style="margin:0;font-family:'Hanken Grotesk',sans-serif;font-size:8.5px;line-height:1.55;color:#6a6053;">No candomblé, axé é a força vital que atravessa tambores, cores e gente. Da roda de samba ao trio elétrico, virou a batida que embala a Bahia inteira.</p><div style="height:1px;background:${bd};margin-top:auto;"></div><div style="font-family:'Hanken Grotesk',sans-serif;font-size:9px;color:${muted};">❤ 128 · 💬 24 · ↗ 12</div></div>`;
      return wrap(`${bar}${article}`);
    }
    case 'mobile': {
      const task = (done: boolean, text: string) =>
        `<div style="display:flex;align-items:center;gap:7px;padding:5px 9px;border-bottom:1px solid ${bd};"><span style="width:13px;height:13px;border-radius:4px;border:1.5px solid ${done ? c : '#cbbfa8'};background:${done ? c : '#fff'};color:#fff;display:grid;place-items:center;font-size:9px;line-height:1;">${done ? '✓' : ''}</span><span style="font-family:'Hanken Grotesk',sans-serif;font-size:8.5px;color:${done ? muted : ink};text-decoration:${done ? 'line-through' : 'none'};">${text}</span></div>`;
      const nav = ['🏠', '📅', '', '🔔', '👤']
        .map((e, i) =>
          i === 2
            ? `<span style="width:19px;height:19px;border-radius:50%;background:${c};color:#fff;display:grid;place-items:center;font-size:12px;line-height:1;">+</span>`
            : `<span>${e}</span>`
        )
        .join('');
      const phone = `<div style="width:138px;background:#fff;border:1px solid ${bd};border-radius:18px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 20px rgba(110,80,30,0.14);"><div style="display:flex;justify-content:space-between;padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:7px;color:${muted};"><span>9:41</span><span>▮▮▮ 100%</span></div><div style="background:${c};color:#fff;padding:8px 11px;font-family:'Hanken Grotesk',sans-serif;font-weight:800;font-size:10px;">Minhas Tarefas</div>${task(true, 'Comprar café')}${task(false, 'Reunião às 15h')}${task(false, 'Treino na academia')}<div style="padding:7px 9px;"><div style="border-radius:8px;background:${c}12;padding:7px 9px;font-family:'Hanken Grotesk',sans-serif;"><div style="font-size:8px;color:${muted};">Hoje</div><div style="font-size:10px;font-weight:800;color:${ink};">3 tarefas · 1 feita</div></div></div><div style="margin-top:auto;display:flex;justify-content:space-around;align-items:center;padding:6px 0;border-top:1px solid ${bd};font-size:12px;">${nav}</div></div>`;
      return wrap(`<div style="flex:1;display:flex;align-items:center;justify-content:center;background:${c}10;border-radius:10px;border:1px solid ${bd};padding:12px;">${phone}</div>`);
    }
    case 'infra': {
      const stat = (label: string, val: string, accent: boolean) =>
        `<div style="flex:1;border:1px solid ${bd};border-radius:8px;background:#fff;padding:7px 8px;display:flex;flex-direction:column;gap:2px;min-width:0;"><span style="font-family:'JetBrains Mono',monospace;font-size:7px;color:${muted};text-transform:uppercase;letter-spacing:.04em;">${label}</span><span style="font-family:'Hanken Grotesk',sans-serif;font-weight:800;font-size:14px;color:${accent ? c : ink};">${val}</span></div>`;
      const stats = `<div style="display:flex;gap:8px;">${stat('Uptime', '99.9%', false)}${stat('Deploys', '42', true)}${stat('Latência', '84ms', false)}</div>`;
      const heights = [40, 62, 50, 74, 58, 80];
      const bars = heights
        .map(
          (h, i) =>
            `<span style="flex:1;height:${h}%;border-radius:3px 3px 0 0;background:${i === heights.length - 1 ? c : c + '40'};"></span>`
        )
        .join('');
      const chart = `<div style="border:1px solid ${bd};border-radius:9px;background:#fff;padding:9px 10px;display:flex;flex-direction:column;gap:6px;"><span style="font-family:'Hanken Grotesk',sans-serif;font-size:8px;font-weight:700;color:${muted};">Requisições / min</span><div style="height:46px;display:flex;align-items:flex-end;gap:6px;">${bars}</div></div>`;
      const log = (icon: string, ic: string, text: string, t: string) =>
        `<div style="display:flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:8px;"><span style="color:${ic};">${icon}</span><span style="color:${ink};flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${text}</span><span style="color:${muted};">${t}</span></div>`;
      const logs = `<div style="border:1px solid ${bd};border-radius:9px;background:${soft};padding:8px 10px;display:flex;flex-direction:column;gap:6px;">${log('✓', '#5BA86B', 'deploy #128 concluído', '12:04')}${log('✓', '#5BA86B', 'health check OK', '12:05')}${log('⟳', c, 'escalando web ×3', '12:06')}</div>`;
      return wrap(`${stats}${chart}${logs}`);
    }
    case 'gem': {
      const bar = `<div style="text-align:center;font-family:'Instrument Serif',serif;font-size:14px;letter-spacing:.02em;color:${ink};">✦ Joia Mística ✦</div>`;
      const hero = `<div style="border-radius:10px;background:linear-gradient(135deg,${c},${c}88);padding:15px 12px;text-align:center;color:#fff;"><div style="font-size:26px;line-height:1;">💎</div><div style="font-family:'Instrument Serif',serif;font-size:16px;margin-top:3px;">Coleção Lua Nova</div><div style="font-family:'Hanken Grotesk',sans-serif;font-size:8.5px;opacity:.9;">Peças que vibram com você</div></div>`;
      const item = (emoji: string, name: string, price: string) =>
        `<div style="border:1px solid ${bd};border-radius:9px;background:#fff;padding:7px;display:flex;flex-direction:column;gap:4px;align-items:center;text-align:center;min-width:0;"><div style="width:100%;height:34px;border-radius:6px;background:${c}14;display:grid;place-items:center;font-size:19px;">${emoji}</div><div style="font-family:'Hanken Grotesk',sans-serif;font-weight:700;font-size:8px;color:${ink};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;">${name}</div><div style="font-family:'Hanken Grotesk',sans-serif;font-weight:800;font-size:8.5px;color:${c};">${price}</div></div>`;
      const grid = `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;">${item('💎', 'Colar Quartzo', 'R$320')}${item('🔮', 'Anel Ametista', 'R$180')}${item('📿', 'Pulseira Ônix', 'R$140')}</div>`;
      return wrap(`${bar}${hero}${grid}`);
    }
  }

  return wrap('');
}
