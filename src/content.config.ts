import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Coleção de documentação servida pelo Starlight. Os arquivos ficam em
// src/content/docs/docs/**, então as URLs saem sob /docs/... (a landing
// continua dona da raiz /).
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
