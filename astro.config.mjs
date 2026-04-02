// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://dennishenle.github.io',
    base: '/wir-heiraten',
    image: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
