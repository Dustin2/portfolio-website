# Portfolio

Personal portfolio of Dustin Gallardo, full stack developer. Live at [dustin2.github.io/portfolio-website](https://dustin2.github.io/portfolio-website/) (English) and [/es/](https://dustin2.github.io/portfolio-website/es/) (Spanish).

Built with [Astro](https://astro.build) as a static site: no client framework, a small TypeScript script for the interactions, and images optimized at build time.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321/portfolio-website/
pnpm build      # type check (astro check) and build to dist/
pnpm preview
```

## Structure

```text
src/
├── i18n/          text for each language (en.ts, es.ts) typed by types.ts
├── data.ts        data shared by both languages: projects, tags, links
├── components/    one component per section, composed in Home.astro
├── layouts/       Base.astro: <head>, metadata, link previews, nav and footer
├── pages/         index.astro (English) and es/index.astro (Spanish)
├── scripts/       main.ts: menu, reveal on scroll, timeline, marquee, copy email
├── styles/        global.css
└── assets/        screenshots, optimized by astro:assets
public/            favicon and link-preview image
```

To change a text, edit it in both `src/i18n/en.ts` and `src/i18n/es.ts`; the type check fails if a translation is missing.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Pull requests only build.
