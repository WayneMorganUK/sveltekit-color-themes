import adapterAuto from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// import { BYPASS_TOKEN } from '$env/static/private';

let adapter = adapterAuto;
let options = {};

console.log(process.env);

if (process.env.VERCEL == '1') {
	adapter = adapterVercel;
	options = {
		// runtime: 'edge',
		// split: true,
		// memory: 128,
		// isr: {
		// 	expiration: 60,
		// 	bypassToken: BYPASS_TOKEN,
		// 	allowQuery: ['search']
		// }
	};
} else if (process.env.WORKERS_CI == '1') {
	adapter = adapterCloudflare;
	options = {
		config: 'cf_workers/wrangler.jsonc',
		platformProxy: {
			configPath: undefined,
			environment: undefined,
			persist: undefined
		},
		fallback: 'plaintext',
		routes: {
			include: ['/*'],
			exclude: ['<all>']
		}
	};

	// **** NOTE: add  pnpx wrangler deploy --config ./cf_workers/ to build command in Cloudflare  *****
} else if (process.env.CF_PAGES == '1') {
	adapter = adapterCloudflare;
	// *** NOTE: Cloudflare pages has to use the root directory
}
// console.log(options);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(options)
	}
};

export default config;
