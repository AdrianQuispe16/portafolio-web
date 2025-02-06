import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://adrianquispe16.github.io/portafolio-web/',
  base: '/portafolio-web/',
  trailingSlash: "always",
  output: 'static',
  vite: {
    build: {
      assetsInlineLimit: 0, // ⬅️ Asegura que los assets no se inyecten como base64
      rollupOptions: {
        output: {
          assetFileNames: "[name].[ext]"
        }
      }
    }
  }
});
