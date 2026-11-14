
// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://adrianquispe16.github.io',
  base: '/portafolio-web',
  trailingSlash: 'always',
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '[name].[ext]'
        }
      }
    }
  }
});
