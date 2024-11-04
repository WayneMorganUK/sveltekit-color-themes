import { theme } from "$lib/runes/theme.svelte";



export function toggleThemeRune() {
    if (theme.state.mode == 'light') {
        theme.state = { mode: 'dark' }

    } else if (theme.state.mode == 'dark') {
        theme.state = { mode: 'blood' }

    } else {
        theme.state = { mode: 'light' }

    }
    theme.update()
}
