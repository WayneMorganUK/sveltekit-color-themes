import { browser } from '$app/environment';
import { theme } from '$lib/runes/theme.svelte.js';

export const load = async ({ data }) => {
    if (browser) {
        const dataTheme = document.documentElement.getAttribute('data-theme') || ``
        if (dataTheme === 'light' || dataTheme === 'dark' || dataTheme === 'blood') {
            theme.state = dataTheme
            localStorage.setItem('theme', dataTheme)
        }
        theme.update()
        return {
            theme: dataTheme
        }
    }
    return {
        theme: data.theme,
    };
}