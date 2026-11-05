// @ts-check
import { defineConfig } from 'astro/config';

// Served by GitHub Pages from the portfolio-website repository, so every URL lives under /portfolio-website.
export default defineConfig({
  site: 'https://dustin2.github.io',
  base: '/portfolio-website',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    // three.js (~530 KB, ~130 KB gzip) is its own chunk, loaded after the page on desktop only.
    build: { chunkSizeWarningLimit: 600 },
  },
});
