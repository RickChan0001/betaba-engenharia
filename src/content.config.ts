import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
    local: z.string(),
    resumo: z.string(),
    imagem: z.string().optional()
  })
});

const obras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obras' }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum(['Residencial', 'Comercial', 'Infraestrutura', 'Reforma']),
    local: z.string(),
    ano: z.number(),
    imagem: z.string(),
    destaque: z.boolean().default(false)
  })
});

export const collections = { noticias, obras };
