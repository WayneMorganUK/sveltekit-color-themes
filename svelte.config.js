import adapterAuto from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import * as toml from '../cf_workers/wrangler.toml';
console.log('Wrangler toml = ', toml);

let adapter = adapterAuto;
let options = {};

// console.log(
// 	'Process env Cloudflare workers = ',
// 	process.env.WORKERS_CI === '1' ? 'WORKERS_CI===`1`' : 'not set'
// );
// console.log(
// 	'Process env Cloudflare pages = ',
// 	process.env.CF_PAGES === '1' ? 'CF_PAGES===`1`' : 'not set'
// );
// console.log('Process env Vercel = ', process.env.VERCEL ?? 'not set');

if (process.env.VERCEL == '1') {
	adapter = adapterVercel;
} else if (process.env.WORKERS_CI == '1') {
	adapter = adapterCloudflare;
	options = {
		platformProxy: {
			configPath: 'wrangler.workers.toml'
		}
	};
} else if (process.env.CF_PAGES == '1') {
	adapter = adapterCloudflare;
	options = {
		platformProxy: {
			configPath: 'wrangler.toml'
		}
	};
}
console.log(options);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			config: 'wrangler.toml',
			platformProxy: {
				configPath: './cf_workers/wrangler.toml',
				environment: 'production',
				persist: true
			},
			fallback: 'plaintext',
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	}
};

export default config;
