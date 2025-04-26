import { browser } from '$app/environment';
import { theme } from '$lib/runes/localStorage.svelte.js';

export const load = async ({ data }) => {
    // theme.value = data.theme as ThemeType
    if (browser) {
        const dataTheme = document.documentElement.getAttribute('data-theme') || ``

        if (dataTheme === 'light' || dataTheme === 'dark' || dataTheme === 'blood') {
            theme.value = dataTheme
        }

        return {
            theme: dataTheme
        }
    }
    return {
        theme: data.theme
    };
}

