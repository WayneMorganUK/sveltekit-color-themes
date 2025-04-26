import type { Handle, RequestEvent } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.theme = event.cookies.get('theme') ?? 'notset';

    return await resolve(event, ({
        preload: ({ type }) => {
            return type === 'font' || type === 'js' || type === 'css'
        }
    }));
};
