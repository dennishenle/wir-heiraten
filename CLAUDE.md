# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev        # Start local dev server at localhost:4321
pnpm build      # Build production site to ./dist/
pnpm preview    # Preview production build locally
```

Requires Node >= 22.12.0 and pnpm (pinned to 10.33.0).

Deployment is automatic: pushing to `main` triggers a GitHub Actions workflow that builds and deploys to GitHub Pages at `https://dennishenle.github.io/wir-heiraten`. `astro.config.mjs` sets `site` and `base` for this; remote images from `images.unsplash.com` are allow-listed via `image.remotePatterns`.

## Architecture

This is a single-page Astro wedding website ("Wir heiraten" = "We're getting married"). It uses Astro 6 with Tailwind CSS v4 (via the `@tailwindcss/vite` plugin — there is no `tailwind.config.js`).

**Page composition:** `src/pages/index.astro` is the only page. It imports and renders all section components in order: `Header → Hero → LoveStory → Timeline → WeddingDetails → DayTimeline → ImportantInfo → WeddingParty → Registry → RSVP → FAQ → Contact → Footer`.

**Component structure:** Each section lives in its own folder under `src/components/`. Every folder follows the same pattern:
- One or more `.astro` files (the section and its sub-components)
- A `.ts` data file containing the section's content/config (e.g., `milestones.ts`, `witnesses.ts`, `schedule.ts`). **Content changes go here**, not in the Astro files.

All section components are re-exported from `src/components/index.ts` and imported via the `@/components` alias.

**TypeScript:** `tsconfig.json` extends `astro/tsconfigs/strict`. Data files define TypeScript `interface` types for their entries (e.g., `Milestone`, `FaqItem`, `Registry`). Component props are typed with `interface Props` in the frontmatter. The `@/` alias maps to `src/`.

**Client-side interactivity:** All dynamic behaviour uses vanilla JS in inline `<script>` blocks — there is no JS framework. Components use standard DOM APIs (`classList`, `addEventListener`, `getElementById`) for things like the header scroll effect, mobile menu toggle, countdown timer, and back-to-top button.

**RSVP form:** Posts to a Google Apps Script endpoint via `fetch`. Submission state is persisted in `localStorage` under the key `rsvp_sent`. Client-side validation toggles visibility of error messages via `data-error` attributes and `classList`.

**Navigation:** Every section has an `id` attribute. `navLinks.ts` uses hash hrefs (`#story`, `#timeline`, etc.) and `global.css` sets `scroll-behavior: smooth` on `<html>`.

**Responsive layout:** Mobile and desktop variants are split using Tailwind's responsive prefixes (`md:hidden` / `hidden md:block`). Some components (e.g., Timeline) have entirely separate sub-components for each breakpoint.

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
