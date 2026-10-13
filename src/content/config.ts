import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    data: z.date(),
    local: z.string(),
    resumo: z.string(),
    imagem: z.string().optional()
  })
});

const obras = defineCollection({
  type: 'content',
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
