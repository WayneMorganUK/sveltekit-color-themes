import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');
    if (!theme) {
        theme = 'light'
        const futureDate = new Date()
        futureDate.setFullYear(futureDate.getFullYear() + 1)
        event.cookies.set('theme', 'light', {
            sameSite: 'strict',
            path: '/',
            expires: futureDate,
            httpOnly: false
        });
    }
    event.locals.theme = { mode: theme }
    const response = await resolve(event)
    return response
}