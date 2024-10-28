import { theme } from "$lib/runes/theme.svelte";

function updateDocument(name: string, newMode: ThemeType) {
    const futureDate = new Date()
    futureDate.setFullYear(futureDate.getFullYear() + 1)
    document.cookie = `${name}=${newMode};path=/;SameSite=strict;expires=${futureDate}`;
    document.documentElement.setAttribute('data-theme', newMode);
}

export function toggleThemeRune() {
    if (theme.state.mode == 'light') {
        theme.state = { mode: 'dark' }
        theme.useLocalStorage()
        updateDocument('theme', 'dark');
    } else if (theme.state.mode == 'dark') {
        theme.state = { mode: 'blood' }
        theme.useLocalStorage()
        updateDocument('theme', 'blood');
    } else {
        theme.state = { mode: 'light' }
        theme.useLocalStorage()
        updateDocument('theme', 'light');
    }
}
