# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev        # Start local dev server at localhost:4321
pnpm build      # Build production site to ./dist/
pnpm preview    # Preview production build locally
```

Deployment is automatic: pushing to `main` triggers a GitHub Actions workflow that builds and deploys to GitHub Pages at `https://dennishenle.github.io/wir-heiraten`.

## Architecture

This is a single-page Astro wedding website ("Wir heiraten" = "We're getting married"). It uses Astro 6 with Tailwind CSS v4 (via the `@tailwindcss/vite` plugin — there is no `tailwind.config.js`).

**Page composition:** `src/pages/index.astro` is the only page. It imports and renders all section components in order: `Header → Hero → LoveStory → Timeline → WeddingDetails → DayTimeline → ImportantInfo → WeddingParty`.

**Component structure:** Each section lives in its own folder under `src/components/`. Every folder follows the same pattern:
- One or more `.astro` files (the section and its sub-components)
- A `.ts` data file containing the section's content/config (e.g., `milestones.ts`, `witnesses.ts`, `schedule.ts`). **Content changes go here**, not in the Astro files.

All section components are re-exported from `src/components/index.ts` and imported via the `@/components` alias.

**Layout:** `src/layouts/Layout.astro` provides the HTML shell, loads Google Fonts (Playfair Display + Lato), and applies base body styles.

**Styling:** Theme tokens (colors, fonts) are defined in the `@theme` block in `src/styles/global.css`. Two shared CSS utilities are defined there:
- `section-padding` — consistent vertical/horizontal padding for every section
- `section-title` — decorative heading style used by every section

**Images:** All images live in `src/assets/` and must be imported as ESM modules. Always use the `<Image>` component from `astro:assets` — never plain `<img>` tags. This enables Astro's automatic image optimisation.

```astro
---
import { Image } from 'astro:assets';
import myPhoto from '@/assets/my-photo.jpg';
---
<Image src={myPhoto} alt="Description" />
```

- For remote images, configure `image.domains` or `image.remotePatterns` in `astro.config.*` and pass the URL string as `src`
- Always provide a meaningful `alt` attribute
