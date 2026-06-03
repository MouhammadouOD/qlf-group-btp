import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Sitemap : à réactiver quand le vrai domaine sera connu
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
});
