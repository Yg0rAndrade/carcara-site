// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // URL de produção, usada para gerar as URLs absolutas de canonical,
  // Open Graph e do sitemap.
  site: 'https://carcaracode.net',
  server: {
    // `host: true` faz o servidor de dev escutar em todas as interfaces
    // (0.0.0.0 / IPv4 e ::), e não apenas em ::1 (IPv6). Sem isso, um app que
    // embute o preview via 127.0.0.1 não consegue conectar.
    host: true,
    // porta fixa para o webview do app conseguir prever a URL.
    port: 4321,
  },
  integrations: [
    // Documentação de uso do Carcará, servida sob /docs. As páginas vivem em
    // src/content/docs/docs/**, com o tema puxado para o creme + brasa do site
    // via src/styles/docs.css. A landing (/) segue com o layout próprio.
    starlight({
      title: 'Carcará Code',
      tagline: 'Guia de uso para quem não programa',
      customCss: ['./src/styles/docs.css'],
      // Troca o cabeçalho padrão do Starlight pelo mesmo lockup (ícone +
      // "CARCARÁ CODE" em pixel font) do nav da home, pra não parecer um
      // site diferente entrando em /docs.
      components: {
        SiteTitle: './src/components/StarlightSiteTitle.astro',
        PageTitle: './src/components/StarlightPageTitle.astro',
      },
      // pt-BR na raiz (sem prefixo de idioma).
      defaultLocale: 'root',
      locales: {
        root: { label: 'Português', lang: 'pt-BR' },
      },
      // Carrega as mesmas fontes da landing nas páginas de docs.
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Press+Start+2P&display=swap',
          },
        },
        // Starlight não define og:image/twitter:image por padrão, então
        // nenhuma página de /docs tinha preview ao compartilhar o link.
        // Reaproveita a mesma imagem da landing (public/og-image.png).
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://carcaracode.net/og-image.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1920' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '1080' } },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'Carcará Code: chat com o Claude Code à esquerda e preview do projeto rodando à direita',
          },
        },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://carcaracode.net/og-image.png' } },
      ],
      // Link de volta para a landing.
      social: [{ icon: 'external', label: 'Site', href: '/' }],
      sidebar: [
        { label: 'Início', link: '/docs/' },
        { label: 'Primeiros passos', autogenerate: { directory: 'docs/primeiros-passos' } },
        { label: 'Seus projetos', autogenerate: { directory: 'docs/seus-projetos' } },
        { label: 'Conversar com a IA', autogenerate: { directory: 'docs/conversar-com-a-ia' } },
        { label: 'Ver o projeto ao vivo', autogenerate: { directory: 'docs/ver-ao-vivo' } },
        { label: 'Código, versões e ferramentas', autogenerate: { directory: 'docs/codigo-e-ferramentas' } },
        { label: 'Ajustes e produtividade', autogenerate: { directory: 'docs/ajustes-e-produtividade' } },
        { label: 'Privacidade e dados', autogenerate: { directory: 'docs/privacidade-e-dados' } },
        { label: 'Ajuda e suporte', autogenerate: { directory: 'docs/ajuda-e-suporte' } },
      ],
    }),
  ],
});
