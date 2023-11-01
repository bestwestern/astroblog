import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [prefetch(),svelte(),mdx(), sitemap()],
});
