import type { Handle, RequestEvent } from '@sveltejs/kit';

const DEFAULT_THEME = 'light';

const COOKIE_OPTIONS: {
    httpOnly: boolean;
    secure: boolean;
    sameSite: boolean | 'lax' | 'strict' | 'none' | undefined
    path: string;
    maxAge: number;
} = {
    httpOnly: false,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 365
};


const getTheme = (event: RequestEvent<Partial<Record<string, string>>, string | null>) => {
    let theme = event.cookies.get('theme') ?? '';
    if (!['light', 'dark', 'blood'].includes(theme)) {
        const colorScheme = event.request.headers.get("Sec-CH-Prefers-Color-Scheme");
        theme = colorScheme || DEFAULT_THEME;
        event.cookies.set('theme', theme, COOKIE_OPTIONS);
    }
    return theme;
};

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.theme = getTheme(event)

    return await resolve(event, ({
        preload: ({ type }) => {
            return type === 'font' || type === 'js' || type === 'css'
        }
    }));
};
