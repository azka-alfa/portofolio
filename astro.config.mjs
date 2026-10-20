// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti dengan domain final setelah deploy (mis. https://portofolio.pages.dev
// atau domain custom), supaya canonical + Open Graph absolut.
export default defineConfig({
  site: 'https://azka-alfa.pages.dev',
  integrations: [sitemap()],
});
