# A Sveltekit App using Color Themes

## Uses logic to deploy to Vercel, Netlify, CF Pages and Cf Workers

If using pnpm and deploying to Cloudflare Workers, in the build settings change default deploy command
from `npx wrangler deploy` to `pnpx wrangler deploy`

for Netlify use `netlify.toml` for build and deploy commands

for Cloudflare Workers use `wrangler.jsonc`
for Cloudflare Pages use `wrangler.toml` to avoid conflict

## Build configuration
Build command `pnpm run build`
Deploy command `pnpx wrangler deploy --config ./cf_workers/`

**** NOTE: add  pnpx wrangler deploy --config ./cf_workers/ to build command in Cloudflare or the relevant path of your wrangler.jsonc file  *****


## Checks to see which platform you are deploying to using the following conditions:
process.env.VERCEL === '1'
process.env.NETLIFY === 'TRUE'
process.env.CF_PAGES ==='1'
process.env.CF_WORKERS_CI === '1'

For more info refer to the relevant documents:
Adapters: https://svelte.dev/docs/kit/adapters
Cloudflare Pages and Workers: https://svelte.dev/docs/kit/adapter-cloudflare
Netlify: https://svelte.dev/docs/kit/adapter-netlify
Vercel: https://svelte.dev/docs/kit/adapter-vercel