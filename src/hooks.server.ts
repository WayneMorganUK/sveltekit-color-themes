import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');
    if (!theme) {
        theme = 'light'
        event.cookies.set('theme', 'light', {
            sameSite: 'lax',
            secure: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
            httpOnly: false
        });
    }
    event.locals.theme = theme
    return await resolve(event)

}