// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://betabaengenharia.com.br',
  integrations: [tailwind(), sitemap()],
  build: { inlineStylesheets: 'auto' }
});
