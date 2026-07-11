// Sitemap gerado a partir de LOCALES: uma <url> por idioma. Formato limpo
// (loc/changefreq/priority), igual aos outros sites. Os alternates hreflang
// NAO ficam aqui de proposito: ja saem no <head> de cada pagina (Layout.astro),
// entao repeti-los aqui so poluia o XML. Fica sempre em sync com a lista de
// idiomas em src/i18n/strings.ts.
import type { APIRoute } from 'astro';
import { LOCALES, LANGS } from '../i18n/strings';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://carcaracode.net/').replace(/\/$/, '');
  const abs = (path: string) => `${base}${path}`;

  const urls = LANGS.map(
    (l) => `  <url>
    <loc>${abs(LOCALES[l].path)}</loc>
    <changefreq>weekly</changefreq>
    <priority>${l === 'pt' ? '1.0' : '0.8'}</priority>
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
