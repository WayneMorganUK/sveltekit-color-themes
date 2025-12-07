import adapterAuto from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let selectedAdapter = adapterAuto;

console.log('Process env Cloudflare workers = ', process.env.CF_WORKERS ?? 'not set');
console.log('Process env Cloudflare pages = ', process.env.CF_PAGE ?? 'not set');
console.log('Process env Vercel = ', process.env.VERCEL ?? 'not set');

if (process.env.VERCEL == '1') {
	selectedAdapter = adapterVercel;
} else if (process.env.WORKERS_CI == '1') {
	selectedAdapter = adapterCloudflare;
}
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: selectedAdapter()
	}
};

export default config;
