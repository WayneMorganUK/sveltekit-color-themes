// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: string
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	type ThemeType = 'dark' | 'light' | 'blood'

	type CookieOptions = {
		httpOnly: boolean;
		secure: boolean;
		sameSite: 'lax' | 'strict' | 'none';
		path: string;
		maxAge: number;
	}
}

export { };
