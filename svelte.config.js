// import { BYPASS_TOKEN } from '$env/static/private';
import adapterAuto from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let adapter = adapterAuto;
let options = {};

console.log(process.env);

// ** Vercel Adapter and Options **
if (process.env.VERCEL === '1') {
	console.log('Using Vercel Adapter');
	adapter = adapterVercel;
	options = {
		runtime: 'edge',
		split: true
		// memory: 128,
		// isr: {
		// 	expiration: 60,
		// 	bypassToken: BYPASS_TOKEN,
		// 	allowQuery: ['search']
		// }
	};
} else if (process.env.WORKERS_CI === '1') {
	// ** Cloudflare Workers Adapter and Options **
	console.log('Using Cloudflare Workers Adapter');
	adapter = adapterCloudflare;
	options = {
		config: 'cf_workers/wrangler.jsonc'
		// platformProxy: {
		// 	configPath: undefined,
		// 	environment: undefined,
		// 	persist: undefined
		// },
		// fallback: 'plaintext',
		// routes: {
		// 	include: ['/*'],
		// 	exclude: ['<all>']
		// }
	};

	// **** NOTE: add  pnpx wrangler deploy --config ./cf_workers/ to build command in Cloudflare  *****
} else if (process.env.CF_PAGES === '1') {
	console.log('Using Cloudflare Pages Adapter');
	// ** Cloudflare Pages Adapter and Options **
	adapter = adapterCloudflare;
	// *** NOTE: Cloudflare pages has to use the root directory
} else if (process.env.NETLIFY == 'true') {
	console.log('Using Netlify Adapter');

	// ** Netlify Adapter and Options **
	adapter = adapterNetlify;
	options = {
		// if true, will create a Netlify Edge Function rather
		// than using standard Node-based functions
		edge: false,

		// if true, will split your app into multiple functions
		// instead of creating a single one for the entire app.
		// if `edge` is true, this option cannot be used
		split: false
	};
} else {
	console.log('Using Auto Adapter');
}

console.log(options);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(options)
	}
};

export default config;
