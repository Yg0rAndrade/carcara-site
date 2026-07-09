// ============================================================================
// Dicionário central de textos do site (pt-BR e en). Fonte única de tradução
// usada pela Landing e pelos componentes. Regra do projeto: nada de travessão
// (—) em nenhum texto; usar vírgula, dois-pontos ou parênteses.
//
// Títulos de seção costumam ter uma palavra em itálico/brasa (.v2-em). Guardamos
// esses títulos em três partes: { a, em, b } => a + <span class="v2-em">em</span> + b.
// ============================================================================

export type Lang = 'pt' | 'en';

/** Metadados de cada locale: usados em <html lang>, Open Graph, hreflang e URL. */
export const LOCALES: Record<
  Lang,
  { htmlLang: string; ogLocale: string; hreflang: string; path: string; label: string; short: string }
> = {
  pt: { htmlLang: 'pt-BR', ogLocale: 'pt_BR', hreflang: 'pt-BR', path: '/', label: 'Português', short: 'PT' },
  en: { htmlLang: 'en', ogLocale: 'en_US', hreflang: 'en', path: '/en/', label: 'English', short: 'EN' },
};

/** Normaliza qualquer string de locale para 'pt' | 'en' (default 'pt'). */
export function normLang(v: string | undefined | null): Lang {
  return v && v.toLowerCase().startsWith('en') ? 'en' : 'pt';
}

type Heading = { a: string; em: string; b: string };

export interface Strings {
  meta: { title: string; description: string; ogAlt: string; keywords: string };
  nav: { features: string; ide: string; download: string; switchTo: string };
  hero: {
    badgeStatic: string;
    titleL1: string;
    titleL2: string;
    sub: string;
    ctaWindows: string;
    ctaLinux: string;
    ctaSeeIde: string;
    metaFree: string;
    metaOpen: string;
  };
  trust: {
    freeBig: string;
    freeSub: string;
    subBig: string;
    subSub: string;
    starsSub: string;
    osBig: string;
    osSub: string;
  };
  ideSection: { kicker: string; h: Heading; p: string };
  slides: { title: string; desc: string; alt: string }[];
  mux: { kicker: string; h: Heading; p: string; live: string; chat: string; preview: string };
  stacks: { kicker: string; h: Heading; p: string; items: string[]; note: string };
  selector: {
    kicker: string;
    h: Heading;
    p: string;
    cards: { title: string; body: string }[];
  };
  assinatura: { kicker: string; h: Heading; p1: string; strong: string; p2: string };
  compare: { kicker: string; h: Heading; p: string; headBefore: string; headAfter: string; rows: [string, string][] };
  quote: { big: Heading; sub: string };
  start: {
    kicker: string;
    h: Heading;
    p: string;
    s1Title: string;
    s1Body: string;
    s1Ok: string;
    s2Title: string;
    s2Body: string;
    s3Title: string;
    s3Body: string;
    doneTitle: string;
    doneBody: string;
  };
  download: {
    kicker: string;
    title: Heading;
    lead: string;
    chips: string[];
    btnWindows: string;
    btnLinux: string;
    artAlt: string;
  };
  demo: { kicker: string; h: Heading; label: string; posterAlt: string; watchAria: string; iframeTitle: string };
  faq: { kicker: string; h: Heading; items: { q: string; a: string }[] };
  footer: { tag: string; links: { ide: string; mux: string; faq: string; download: string }; rights: string; made: string };
  ideWindow: {
    inputPh: string;
    tabPreview: string;
    tabCode: string;
    tabGit: string;
    toolHistory: string;
    toolBoard: string;
    searchTitle: string;
  };
  seletor: {
    botHello: string;
    ref: string;
    userMsg: string;
    reply: string;
    inputPh: string;
    selectorBtn: string;
    selectorMode: string;
    siteBrand: string;
    siteTag: string;
    siteH1: string;
    siteSub: string;
    siteCta: string;
  };
}

export const STRINGS: Record<Lang, Strings> = {
  pt: {
    meta: {
      title: 'Carcará Code: Multiplexador de projetos e IDE para o Claude Code',
      description:
        'Carcará Code é a IDE e o multiplexador de projetos para o Claude Code: vários ao mesmo tempo, cada um com chat e preview lado a lado. Grátis, open source e para Windows.',
      ogAlt: 'Carcará Code: chat com o Claude Code à esquerda e preview do projeto rodando à direita',
      keywords:
        'multiplexador de projetos, multiplexador para Windows, IDE para Claude Code, gerenciar vários projetos, Claude Code, grátis, open source, Windows',
    },
    nav: { features: 'recursos', ide: 'a ide', download: 'baixar', switchTo: 'English' },
    hero: {
      badgeStatic: 'IDE PARA O',
      titleL1: 'Infinitos projetos,',
      titleL2: 'um único voo.',
      sub: 'Carcará Code é a IDE e o multiplexador de projetos para a sua IA de código. Um ícone por projeto, com chat e preview lado a lado. Abra quantos quiser e voe entre eles num clique.',
      ctaWindows: 'Baixar grátis para Windows',
      ctaLinux: 'Linux (AppImage)',
      ctaSeeIde: 'Ver a IDE',
      metaFree: 'grátis',
      metaOpen: 'open source',
    },
    trust: {
      freeBig: '100% grátis',
      freeSub: 'código aberto · MIT',
      subBig: 'Sua assinatura',
      subSub: 'sem API key · sem custo por token',
      starsSub: 'estrelar no GitHub',
      osBig: 'Windows 10/11',
      osSub: 'macOS · Linux via código',
    },
    ideSection: {
      kicker: 'A IDE',
      h: { a: 'Muitos projetos, ', em: 'zero firula', b: '.' },
      p: 'Um recurso por vez, passe pro lado e veja o Carcará por dentro.',
    },
    slides: [
      {
        title: 'Cada projeto, a IA que você quiser',
        desc: 'Claude Code (o padrão), Codex, OpenCode, Antigravity ou um CLI seu, você escolhe por pasta.',
        alt: "Configurações do Carcará Code: 'IA por projeto', cada projeto podendo usar Claude Code, Codex, OpenCode, Antigravity ou um CLI personalizado",
      },
      {
        title: 'Código e Git embutidos',
        desc: 'Veja os arquivos e o diff de cada mudança sem sair da IDE.',
        alt: 'Aba de código do Carcará Code: árvore de arquivos e um script com destaque de sintaxe',
      },
      {
        title: 'Preview ao vivo',
        desc: 'A IDE sobe seu dev server e mostra o site embutido enquanto você conversa.',
        alt: 'Preview ao vivo no Carcará Code: a própria landing do Carcará rodando em localhost',
      },
      {
        title: 'Funciona em qualquer projeto',
        desc: 'De uma loja a uma tela de login: cada app mantém sua conversa e seu preview.',
        alt: 'Preview ao vivo de uma tela de login rodando dentro do Carcará Code',
      },
    ],
    mux: {
      kicker: 'MULTIPLEXADOR',
      h: { a: 'Vários projetos, ', em: 'rodando ao mesmo tempo', b: '.' },
      p: 'Não é um editor de um projeto só. O Carcará é um multiplexador: cada projeto fica vivo no seu próprio espaço, com chat e preview, e você salta de um pro outro num clique, sem perder o fio.',
      live: 'rodando',
      chat: 'chat',
      preview: 'preview ao vivo',
    },
    stacks: {
      kicker: 'QUALQUER STACK',
      h: { a: 'Funciona com ', em: 'qualquer linguagem', b: '.' },
      p: 'React, Astro, Next.js, PHP e o que mais você usar. O Carcará não liga pra stack: se roda na sua máquina, roda aqui. Conecte quantos projetos quiser, de qualquer tecnologia, cada um no seu espaço com chat e preview.',
      items: ['React', 'Next.js', 'Astro', 'Vue', 'Svelte', 'Angular', 'Node.js', 'PHP', 'Laravel', 'Python', 'Django', 'Ruby on Rails', 'Go', 'Vite', 'HTML + CSS'],
      note: 'e muitos outros',
    },
    selector: {
      kicker: 'SELEÇÃO VISUAL',
      h: { a: 'Aponte pro que quer ', em: 'mudar', b: '.' },
      p: 'Chega de descrever onde fica o botão. Ative o seletor, clique no elemento direto no preview e ele entra no chat como referência, já com o código junto. Você conversa, o Carcará muda.',
      cards: [
        { title: 'Clique no que quer mudar', body: 'Ative o seletor e clique em qualquer parte do site no preview. Sem caçar arquivo, sem inspecionar código na mão.' },
        { title: 'Vai direto pro chat', body: 'O elemento escolhido entra na conversa como referência. A IA já sabe exatamente do que você está falando.' },
        { title: 'Com o código junto', body: 'Junto da referência vai o trecho daquele elemento, então o ajuste sai certeiro logo de primeira.' },
      ],
    },
    assinatura: {
      kicker: 'SEM API KEY',
      h: { a: 'Usa a ', em: 'assinatura da sua IA', b: '.' },
      p1: 'Já paga alguma IA de código, tipo o Claude? Então pode usar ela no Carcará Code ',
      strong: 'sem pagar nada a mais',
      p2: '. Ele conversa direto com a sua assinatura, sem chave de API e sem custo por token a cada mensagem. O que você já tem, funcionando na sua IDE.',
    },
    compare: {
      kicker: 'O SALTO',
      h: { a: 'Antes e ', em: 'depois', b: '.' },
      p: 'O mesmo trabalho, sem o atrito de sempre.',
      headBefore: 'Do jeito difícil',
      headAfter: 'Com o Carcará',
      rows: [
        ['Cinco janelas e abas pra achar um projeto', 'Um ícone por projeto no rail'],
        ['Terminal aberto e comandos decorados', 'Você conversa, ele cuida do código'],
        ['Chave de API e custo por token a cada mensagem', 'Usa a sua assinatura do Claude, sem API key'],
        ['Medo de deixar a IA mexer e bagunçar tudo', 'Checkpoints: volte no tempo num clique'],
        ['Perde o fio ao trocar de contexto', 'Cada projeto guarda conversa e preview'],
        ['Editor pesado, cheio de firula', 'Só o essencial: projetos, chat e preview'],
      ],
    },
    quote: {
      big: { a: 'Pega o projeto, ', em: 'resolve e entrega', b: '.' },
      sub: 'O carcará é rápido, esperto e destemido. Não depende de uma presa só e nunca fica na mão. Sua IDE devia ser do mesmo jeito: leve, valente, e com todos os seus projetos a um clique de distância.',
    },
    start: {
      kicker: 'COMO COMEÇAR',
      h: { a: 'Do zero ao ', em: 'primeiro projeto', b: '.' },
      p: 'Grátis e de código aberto. Em três passos, honestos.',
      s1Title: 'Node.js + Claude Code',
      s1Body: 'Instale o Node.js e faça login no Claude Code uma vez. É o motor que o Carcará usa por baixo.',
      s1Ok: '✓ conectado, tudo pronto',
      s2Title: 'Baixe e instale',
      s2Body: 'Rode o instalador pra Windows. Na primeira vez o Windows pode dizer que "protegeu seu PC": clique em Mais informações › Executar assim mesmo (o app ainda não é assinado).',
      s3Title: 'Aponte sua pasta',
      s3Body: 'Abra o Carcará, escolha a pasta dos seus projetos e solte o bicho. Cada subpasta vira um ícone no rail.',
      doneTitle: 'Pronto, é só voar',
      doneBody: 'Seus projetos num rail só, cada um com chat e preview ao vivo. Do jeito que devia ser.',
    },
    download: {
      kicker: 'DOWNLOAD',
      title: { a: 'Solte o ', em: 'carcará', b: '.' },
      lead: 'Gratuito, de código aberto e pra Windows ou Linux. Traga seus projetos e voe.',
      chips: ['100% grátis', 'open source · MIT', 'Windows 10/11', 'Linux (AppImage)'],
      btnWindows: 'Baixar grátis para Windows',
      btnLinux: 'Linux (AppImage)',
      artAlt: 'Carcará voando, em pixel art',
    },
    demo: {
      kicker: 'VEJA EM AÇÃO',
      h: { a: 'O Carcará em ', em: '3 minutos', b: '.' },
      label: 'Ver o Carcará em ação · 3 min',
      posterAlt: 'Carcará Code rodando: rail de projetos à esquerda, chat do Claude Code no meio e o site em preview ao vivo à direita',
      watchAria: 'Assistir à demonstração do Carcará Code',
      iframeTitle: 'Demonstração do Carcará Code',
    },
    faq: {
      kicker: 'PERGUNTAS FREQUENTES',
      h: { a: 'Ainda com ', em: 'dúvida', b: '?' },
      items: [
        { q: 'O Carcará Code é pago?', a: 'Não. É totalmente gratuito e de código aberto (licença MIT). Pode usar, auditar e modificar à vontade, sem plano, sem mensalidade, sem pegadinha.' },
        { q: 'Funciona com o Claude Code?', a: 'Sim, é feito sob medida pro Claude Code, essa é a opção padrão. E o melhor: usa a sua assinatura do Claude, sem precisar de chave de API.' },
        { q: 'Funciona com o OpenCode e outras IAs?', a: 'Funciona. Além do Claude Code, você escolhe por projeto entre OpenCode, Codex (ChatGPT/OpenAI), Antigravity (Google) ou até um comando de CLI seu. É só ter o CLI da IA instalado.' },
        { q: 'É uma extensão pra outra IDE, tipo VS Code?', a: 'Não. O Carcará Code é a própria IDE, um app de desktop enxuto que você abre e já começa a trabalhar. Nada de instalar plugin dentro de outro editor.' },
        { q: 'É tipo um multiplexador de projetos?', a: 'Isso. Pense num multiplexador visual pros seus projetos: em vez de terminais lado a lado (tipo tmux), o Carcará mantém vários projetos rodando ao mesmo tempo, cada um com sua IA, seu chat e seu preview ao vivo, e você troca entre eles num clique. Grátis, open source e com instalador pra Windows.' },
        { q: 'Preciso saber programar?', a: 'Não. Se você sabe descrever o que quer, o Carcará faz acontecer. Você conversa, ele cuida do código e você vê o resultado na tela. Sem terminal, sem comando decorado.' },
        { q: 'Em quais sistemas roda?', a: 'Tem instalador pronto pra Windows. Em macOS e Linux dá pra rodar a partir do código, é um app Electron, então funciona nos três.' },
        { q: 'É seguro?', a: 'É. O código é aberto, então dá pra auditar tudo. É um projeto independente, feito com cuidado, sem servidor no meio: a conversa roda direto na sua máquina com a sua IA.' },
        { q: 'O que preciso ter instalado?', a: 'Node.js e o Claude Code (logado). Git é recomendado. Aí é só apontar a sua pasta de projetos e soltar o carcará.' },
      ],
    },
    footer: {
      tag: 'não deixa projeto pra trás',
      links: { ide: 'A IDE', mux: 'Multiplexador', faq: 'FAQ', download: 'Baixar' },
      rights: '© 2026 Carcará Code · Licença MIT',
      made: 'feito com',
    },
    ideWindow: {
      inputPh: 'Peça uma alteração…',
      tabPreview: 'Preview',
      tabCode: 'Código',
      tabGit: 'Git',
      toolHistory: 'Histórico',
      toolBoard: 'Board',
      searchTitle: 'Buscar (Ctrl K)',
    },
    seletor: {
      botHello: 'Manda o que você quer ajustar.',
      ref: '<button> Comprar agora',
      userMsg: 'deixa esse botão maior e verde',
      reply: 'Feito, botão maior e em verde.',
      inputPh: 'Peça uma alteração…',
      selectorBtn: 'Seletor',
      selectorMode: 'modo seletor',
      siteBrand: 'Bazar Carcará',
      siteTag: 'OFERTA DA SEMANA',
      siteH1: 'Ofertas que voam.',
      siteSub: 'Frete grátis acima de R$199, só esta semana no Bazar Carcará.',
      siteCta: 'Comprar agora',
    },
  },

  en: {
    meta: {
      title: 'Carcará Code: Project multiplexer and IDE for Claude Code',
      description:
        'Carcará Code is the IDE and project multiplexer for Claude Code: many projects at once, each with chat and live preview side by side. Free, open source and for Windows.',
      ogAlt: 'Carcará Code: Claude Code chat on the left and the running project preview on the right',
      keywords:
        'project multiplexer, multiplexer for Windows, IDE for Claude Code, manage multiple projects, Claude Code, free, open source, Windows',
    },
    nav: { features: 'features', ide: 'the ide', download: 'download', switchTo: 'Português' },
    hero: {
      badgeStatic: 'IDE FOR',
      titleL1: 'Infinite projects,',
      titleL2: 'a single flight.',
      sub: 'Carcará Code is the IDE and project multiplexer for your coding AI. One icon per project, with chat and live preview side by side. Open as many as you want and fly between them in one click.',
      ctaWindows: 'Download free for Windows',
      ctaLinux: 'Linux (AppImage)',
      ctaSeeIde: 'See the IDE',
      metaFree: 'free',
      metaOpen: 'open source',
    },
    trust: {
      freeBig: '100% free',
      freeSub: 'open source · MIT',
      subBig: 'Your subscription',
      subSub: 'no API key · no per-token cost',
      starsSub: 'star it on GitHub',
      osBig: 'Windows 10/11',
      osSub: 'macOS · Linux from source',
    },
    ideSection: {
      kicker: 'THE IDE',
      h: { a: 'Many projects, ', em: 'zero fuss', b: '.' },
      p: 'One feature at a time, swipe across and see the Carcará from the inside.',
    },
    slides: [
      {
        title: 'Each project, the AI you want',
        desc: 'Claude Code (the default), Codex, OpenCode, Antigravity or a CLI of your own, you pick it per folder.',
        alt: "Carcará Code settings: 'AI per project', each project able to use Claude Code, Codex, OpenCode, Antigravity or a custom CLI",
      },
      {
        title: 'Code and Git built in',
        desc: 'See the files and the diff of every change without leaving the IDE.',
        alt: 'Carcará Code code tab: file tree and a script with syntax highlighting',
      },
      {
        title: 'Live preview',
        desc: 'The IDE brings up your dev server and shows the embedded site while you chat.',
        alt: "Live preview in Carcará Code: Carcará's own landing page running on localhost",
      },
      {
        title: 'Works on any project',
        desc: 'From a store to a login screen: each app keeps its own conversation and preview.',
        alt: 'Live preview of a login screen running inside Carcará Code',
      },
    ],
    mux: {
      kicker: 'MULTIPLEXER',
      h: { a: 'Many projects, ', em: 'running at the same time', b: '.' },
      p: "It is not a single-project editor. Carcará is a multiplexer: each project stays alive in its own space, with chat and preview, and you jump from one to another in one click, without losing your place.",
      live: 'running',
      chat: 'chat',
      preview: 'live preview',
    },
    stacks: {
      kicker: 'ANY STACK',
      h: { a: 'Works with ', em: 'any language', b: '.' },
      p: 'React, Astro, Next.js, PHP and whatever else you use. Carcará does not care about the stack: if it runs on your machine, it runs here. Connect as many projects as you want, from any technology, each in its own space with chat and preview.',
      items: ['React', 'Next.js', 'Astro', 'Vue', 'Svelte', 'Angular', 'Node.js', 'PHP', 'Laravel', 'Python', 'Django', 'Ruby on Rails', 'Go', 'Vite', 'HTML + CSS'],
      note: 'and many more',
    },
    selector: {
      kicker: 'VISUAL SELECTION',
      h: { a: 'Point at what you want to ', em: 'change', b: '.' },
      p: 'No more describing where the button is. Turn on the selector, click the element right in the preview and it drops into the chat as a reference, code included. You talk, Carcará changes it.',
      cards: [
        { title: 'Click what you want to change', body: 'Turn on the selector and click any part of the site in the preview. No file hunting, no inspecting code by hand.' },
        { title: 'Straight into the chat', body: 'The chosen element enters the conversation as a reference. The AI knows exactly what you are talking about.' },
        { title: 'With the code attached', body: 'The snippet of that element goes along with the reference, so the change lands right the first time.' },
      ],
    },
    assinatura: {
      kicker: 'NO API KEY',
      h: { a: 'Uses ', em: 'your AI subscription', b: '.' },
      p1: 'Already paying for a coding AI like Claude? Then you can use it in Carcará Code ',
      strong: 'at no extra cost',
      p2: '. It talks straight to your subscription, no API key and no per-token cost on every message. What you already have, working inside your IDE.',
    },
    compare: {
      kicker: 'THE LEAP',
      h: { a: 'Before and ', em: 'after', b: '.' },
      p: 'The same work, without the usual friction.',
      headBefore: 'The hard way',
      headAfter: 'With Carcará',
      rows: [
        ['Five windows and tabs to find one project', 'One icon per project in the rail'],
        ['Terminal open and commands memorized', 'You talk, it handles the code'],
        ['API key and per-token cost on every message', 'Uses your Claude subscription, no API key'],
        ['Afraid to let the AI touch and break everything', 'Checkpoints: rewind in one click'],
        ['Losing your place when switching context', 'Each project keeps its chat and preview'],
        ['Heavy editor, full of clutter', 'Just the essentials: projects, chat and preview'],
      ],
    },
    quote: {
      big: { a: 'Grab the project, ', em: 'solve it and ship', b: '.' },
      sub: 'The carcará is fast, clever and fearless. It never depends on a single prey and never comes up empty. Your IDE should be the same: light, bold, and with all your projects one click away.',
    },
    start: {
      kicker: 'GETTING STARTED',
      h: { a: 'From zero to your ', em: 'first project', b: '.' },
      p: 'Free and open source. In three honest steps.',
      s1Title: 'Node.js + Claude Code',
      s1Body: 'Install Node.js and log into Claude Code once. It is the engine Carcará runs on underneath.',
      s1Ok: '✓ connected, all set',
      s2Title: 'Download and install',
      s2Body: 'Run the Windows installer. The first time, Windows may say it "protected your PC": click More info › Run anyway (the app is not signed yet).',
      s3Title: 'Point it at your folder',
      s3Body: 'Open Carcará, choose the folder with your projects and let the bird loose. Each subfolder becomes an icon in the rail.',
      doneTitle: "Done, now just fly",
      doneBody: 'All your projects in one rail, each with chat and live preview. The way it should be.',
    },
    download: {
      kicker: 'DOWNLOAD',
      title: { a: 'Unleash the ', em: 'carcará', b: '.' },
      lead: 'Free, open source and for Windows or Linux. Bring your projects and fly.',
      chips: ['100% free', 'open source · MIT', 'Windows 10/11', 'Linux (AppImage)'],
      btnWindows: 'Download free for Windows',
      btnLinux: 'Linux (AppImage)',
      artAlt: 'Carcará flying, in pixel art',
    },
    demo: {
      kicker: 'SEE IT IN ACTION',
      h: { a: 'Carcará in ', em: '3 minutes', b: '.' },
      label: 'Watch Carcará in action · 3 min',
      posterAlt: 'Carcará Code running: project rail on the left, Claude Code chat in the middle and the site in live preview on the right',
      watchAria: 'Watch the Carcará Code demo',
      iframeTitle: 'Carcará Code demo',
    },
    faq: {
      kicker: 'FREQUENTLY ASKED',
      h: { a: 'Still have a ', em: 'question', b: '?' },
      items: [
        { q: 'Is Carcará Code paid?', a: 'No. It is fully free and open source (MIT license). Use it, audit it and modify it freely, no plan, no subscription, no catch.' },
        { q: 'Does it work with Claude Code?', a: 'Yes, it is built for Claude Code, that is the default option. Best of all: it uses your Claude subscription, no API key required.' },
        { q: 'Does it work with OpenCode and other AIs?', a: 'It does. Beyond Claude Code, you choose per project between OpenCode, Codex (ChatGPT/OpenAI), Antigravity (Google) or even a CLI command of your own. You just need the AI CLI installed.' },
        { q: 'Is it an extension for another IDE, like VS Code?', a: 'No. Carcará Code is the IDE itself, a lean desktop app you open and start working in right away. No installing a plugin inside another editor.' },
        { q: 'Is it like a project multiplexer?', a: 'Exactly. Think of a visual multiplexer for your projects: instead of terminals side by side (like tmux), Carcará keeps several projects running at the same time, each with its AI, its chat and its live preview, and you switch between them in one click. Free, open source and with a Windows installer.' },
        { q: 'Do I need to know how to code?', a: 'No. If you can describe what you want, Carcará makes it happen. You talk, it handles the code and you see the result on screen. No terminal, no memorized commands.' },
        { q: 'Which systems does it run on?', a: 'There is a ready installer for Windows. On macOS and Linux you can run it from source, it is an Electron app, so it works on all three.' },
        { q: 'Is it safe?', a: 'It is. The code is open, so you can audit everything. It is an independent project, built with care, with no server in the middle: the conversation runs straight on your machine with your AI.' },
        { q: 'What do I need installed?', a: 'Node.js and Claude Code (logged in). Git is recommended. Then just point it at your projects folder and let the carcará loose.' },
      ],
    },
    footer: {
      tag: 'never leaves a project behind',
      links: { ide: 'The IDE', mux: 'Multiplexer', faq: 'FAQ', download: 'Download' },
      rights: '© 2026 Carcará Code · MIT License',
      made: 'made with',
    },
    ideWindow: {
      inputPh: 'Ask for a change…',
      tabPreview: 'Preview',
      tabCode: 'Code',
      tabGit: 'Git',
      toolHistory: 'History',
      toolBoard: 'Board',
      searchTitle: 'Search (Ctrl K)',
    },
    seletor: {
      botHello: 'Tell me what you want to tweak.',
      ref: '<button> Buy now',
      userMsg: 'make this button bigger and green',
      reply: 'Done, bigger and green button.',
      inputPh: 'Ask for a change…',
      selectorBtn: 'Selector',
      selectorMode: 'selector mode',
      siteBrand: 'Carcará Bazaar',
      siteTag: 'DEAL OF THE WEEK',
      siteH1: 'Deals that fly.',
      siteSub: 'Free shipping over $49, this week only at Carcará Bazaar.',
      siteCta: 'Buy now',
    },
  },
};

/** Retorna o pacote de textos do locale. */
export function useStrings(lang: Lang): Strings {
  return STRINGS[lang];
}
