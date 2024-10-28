function themeRune(key: string, startValue: { mode: ThemeType }) {
    let state = $state(startValue)
    return {
        get state() { return state },
        set state(value) { state = value },
        useLocalStorage: () => {
            const keyValue = localStorage.getItem(key) as string;
            if (keyValue) {
                localStorage.setItem(key, JSON.stringify(state));
            }
        }
    }
}
export const theme = themeRune('theme', { mode: 'light' })