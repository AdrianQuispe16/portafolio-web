// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://adrianquispe16.github.io/portafolio-web/',
  base: '/portafolio-web/',
  trailingSlash: "always",
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "[name].[ext]"
        }
      }
    }
  }
});
