import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const path = fileURLToPath(new URL('package.json', import.meta.url));
const pkg = JSON.parse(readFileSync(path, 'utf8'))

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	define: {
		__VERSION__: JSON.stringify(pkg.version)
	}
});
