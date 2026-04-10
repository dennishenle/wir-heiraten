# Wir heiraten 💍

A beautiful, single-page wedding website built with Astro and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Astro 6](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Deployment:** GitHub Pages

## ✨ Features

- **Single Page Design:** A seamless scrolling experience across all sections.
- **Responsive Layout:** Fully optimized for both mobile and desktop devices.
- **Interactive Elements:**
  - Countdown timer to the big day.
  - RSVP form with Google Apps Script integration and local state persistence.
  - Smooth navigation with a sticky header.
  - Mobile-friendly menu and back-to-top functionality.
- **Optimized Imagery:** Using Astro's `<Image />` component for automatic image optimization.

## 🏗️ Project Structure

The project follows a component-based architecture where each section of the page is encapsulated in its own directory under `src/components/`, containing both the Astro component and its corresponding data configuration file.

```text
src/
├── assets/         # Images and static assets
├── components/     # Section components (Header, Hero, Timeline, RSVP, etc.)
├── layouts/        # Page layout wrapper
├── pages/          # Single entry point (index.astro)
└── styles/         # Global CSS and theme tokens
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js:** >= 22.12.0
- **pnpm:** 10.33.0

### Installation

```sh
pnpm install
```

### Development

Start the local development server:

```sh
pnpm dev
```

The site will be available at `http://localhost:4321`.

### Build

Generate the production build:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## 🌐 Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions. Pushing changes to the `main` branch triggers the build and deployment process.

URL: [https://dennishenle.github.io/wir-heiraten](https://dennishenle.github.io/wir-heiraten)
