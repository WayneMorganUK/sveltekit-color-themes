// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: {
				mode: string | null
			}
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	type ThemeType = 'dark' | 'light' | 'blood'
}

export { };