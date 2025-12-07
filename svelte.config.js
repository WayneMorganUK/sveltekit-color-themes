// import adapterAuto from '@sveltejs/adapter-auto';
// import adapterVercel from '@sveltejs/adapter-vercel';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

console.log('Using Cloudflare adapter', process.env);
// let selectedAdapter = adapterAuto;

// if (process.env.VERCEL === '1') {
// 	selectedAdapter = adapterVercel();
// } else if (process.env.CF_PAGES === '1') {
// 	selectedAdapter = adapterCloudflare();
// }
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapterCloudflare()
	}
};

export default config;
