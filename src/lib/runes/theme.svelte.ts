function themeRune(key: string, startValue: { mode: string }) {
    let state = $state(startValue)
    return {
        get state() { return state },
        set state(value) { state = value },
        update: () => {
            console.log("local stprege rune", key)
            const keyValue = localStorage.getItem(key) as string;
            if (keyValue) {
                localStorage.setItem(key, JSON.stringify(state));
            }

            document.cookie = `theme=${state.mode};path=/;SameSite=strict;maxAge: ${60 * 60 * 24 * 365}`;
            document.documentElement.setAttribute('data-theme', state.mode)


        }
    }
}
export const theme = themeRune('theme', { mode: 'light' })