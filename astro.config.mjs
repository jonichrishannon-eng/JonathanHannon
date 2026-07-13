import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonichrishannon-eng.github.io',
  base: '/JonathanHannon',
  integrations: [react(), tailwind(), mdx(), vue({ jsx: true })],

  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});