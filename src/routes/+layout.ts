import { browser } from '$app/environment';
import { theme } from '$lib/runes/theme.svelte.js';

export const load = async ({ data }) => {
    if (browser) {
        if (data.theme) theme.state.mode = data.theme
        console.log("+servere.ts", theme.state.mode)

        theme.update()
    }
    return {
        theme: data.theme,
    };
}
