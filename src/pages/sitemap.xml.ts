// Sitemap gerado a partir de LOCALES: uma <url> por idioma. Formato limpo
// (loc/changefreq/priority), igual aos outros sites. Os alternates hreflang
// NAO ficam aqui de proposito: ja saem no <head> de cada pagina (Layout.astro),
// entao repeti-los aqui so poluia o XML. Fica sempre em sync com a lista de
// idiomas em src/i18n/strings.ts.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { LOCALES, LANGS } from '../i18n/strings';

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? 'https://carcaracode.net/').replace(/\/$/, '');
  const abs = (path: string) => `${base}${path}`;

  const urls = LANGS.map(
    (l) => `  <url>
    <loc>${abs(LOCALES[l].path)}</loc>
    <changefreq>weekly</changefreq>
    <priority>${l === 'pt' ? '1.0' : '0.8'}</priority>
  </url>`
  ).join('\n');

  // Página "Como começar um projeto" (skill start). Só existe em pt e en.
  const extra = ['/comecar/', '/en/comecar/']
    .map(
      (path) => `  <url>
    <loc>${abs(path)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n');

  // Páginas de /docs/**, geradas pelo Starlight a partir da coleção `docs`.
  // Sem isso, as 30 páginas de documentação nunca apareciam no sitemap.
  const docsEntries = await getCollection('docs');
  const docs = docsEntries
    .map((entry) => {
      const slug = entry.id === 'docs' ? '' : `${entry.id.replace(/^docs\//, '')}/`;
      return `  <url>
    <loc>${abs(`/docs/${slug}`)}</loc>
    <changefreq>weekly</changefreq>
    <priority>${entry.id === 'docs' ? '0.9' : '0.6'}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${extra}
${docs}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
