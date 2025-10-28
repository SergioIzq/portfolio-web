// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ['cdn.simpleicons.org', 'upload.wikimedia.org'],
  },
  server: {
    port: 4200
  }
});
