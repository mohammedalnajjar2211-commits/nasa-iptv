
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nasa-iptv.net',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
