function localStorageTheme(mode: ThemeType) {
    let state = $state(mode)
    return {
        get state() { return state },
        set state(value) { state = value },
        update: () => {
            localStorage.setItem('theme', state);
            document.cookie = `theme=${state};path=/;SameSite=lax;max-age= ${60 * 60 * 24 * 365}`;
            document.documentElement.setAttribute('data-theme', state)
        }
    }
}

export const theme = localStorageTheme('blood')