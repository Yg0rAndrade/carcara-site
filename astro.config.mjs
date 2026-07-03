// @ts-check
import { defineConfig } from 'astro/config';

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
});
