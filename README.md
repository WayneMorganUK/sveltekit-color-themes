# SvelteKit Color Themes

This project is a SvelteKit starter that demonstrates how to implement a robust color theme solution that persists on the server to prevent a flash of unstyled content (FOUC). It uses a Svelte 5 rune-like class to manage the theme, persisting it to both browser `localStorage` and a cookie.

## Features

-   **Svelte 5 Runes-like Class:** Uses a modern, reactive approach to state management.
-   **Server-Side Rendering (SSR) of Themes:** The theme is read from a cookie on the server, so the correct theme is applied to the initial HTML response. This prevents the default theme from showing before the client-side JavaScript loads.
-   **localStorage and Cookie Persistence:** The selected theme is stored in both `localStorage` for fast client-side access and a cookie to send the theme to the server.
-   **Easy to Use:** The theme can be changed with a simple function call.
-   **Themable with CSS Variables:** Themes are defined using CSS custom properties (variables), making it easy to create new themes and customize existing ones.
-   **Includes 3 Themes:** Comes with `light`, `dark`, and `blood` themes out of the box.
-   **CSS-based Icon Switching:** Avoids icon flickering by using CSS to show/hide icons based on the current theme, instead of conditional rendering in Svelte.

## How it Works

The core of the theme management system is the `LocalStorage` class located in `src/lib/runes/localStorage.svelte.ts`. This class is instantiated as a `theme` object, which is then used throughout the application.

When the `theme.value` is changed, the `LocalStorage` class does the following:

1.  Updates its internal state.
2.  Saves the new theme to `window.localStorage`.
3.  Sets a cookie with the new theme.
4.  Sets the `data-theme` attribute on the `<html>` element.

The `src/hooks.server.ts` file contains a `handle` function that reads the `theme` cookie on the server and sets `event.locals.theme`. This makes the theme available to all server-side code.

The actual themes are defined in `src/app.css`. Each theme is a set of CSS custom properties under a `html[data-theme='...']` selector.

The `src/lib/Header/ToggleDarkMode.svelte` component provides an example of how to use the `theme` object to change the current theme.

## Installation and Usage

1.  Clone the repository:

    ```bash
    git clone https://github.com/WayneMorganUK/sveltekit-color-themes.git
    ```

2.  Install the dependencies:

    ```bash
    cd sveltekit-color-themes
    pnpm install
    ```

3.  Run the development server:

    ```bash
    pnpm dev
    ```

## Adding New Themes

To add a new theme, you need to do the following:

1.  **Define the theme in `src/app.css`:**

    Add a new selector for your theme and define the CSS custom properties for it. For example, to add a "forest" theme:

    ```css
    html[data-theme='forest'] {
        --color-text-base: #f0f0f0;
        --color-base: #2a3d2a;
        /* ...and so on */
    }
    ```

2.  **Update the theme toggling logic:**

    In `src/lib/Header/ToggleDarkMode.svelte` (or wherever you handle theme changes), add your new theme to the rotation.

    ```typescript
    function changeTheme() {
        if (theme.value == 'light') {
            theme.value = 'dark';
        } else if (theme.value == 'dark') {
            theme.value = 'blood';
        } else if (theme.value == 'blood') {
            theme.value = 'forest'; // Add your new theme here
        } else {
            theme.value = 'light';
        }
    }
    ```

## Deployment (Adapters)

This project is configured to be deployed to various platforms using SvelteKit adapters. The code includes logic to detect the deployment platform and use the correct adapter.

The following platforms are supported out of the box:

-   Vercel
-   Netlify
-   Cloudflare Pages
-   Cloudflare Workers

The deployment platform is detected using the following environment variables:

-   `process.env.VERCEL === '1'`
-   `process.env.NETLIFY === 'TRUE'`
-   `process.env.CF_PAGES === '1'`
-   `process.env.CF_WORKERS_CI === '1'`

### Platform-Specific Configuration

-   **Netlify:** Build and deploy commands are configured in `netlify.toml`.
-   **Cloudflare Workers:** Configuration is in `wrangler_workers.jsonc`. If you are using `pnpm`, you may need to change the deploy command in your Cloudflare dashboard from `npx wrangler deploy` to `pnpx wrangler deploy --config ./cf_workers/wrangler_workers.jsonc` to include filename and path.
-   **Cloudflare Pages:** Uses `wrangler.toml` to avoid conflicts with Cloudflare Workers configuration. This path and filename cannot be configured 

### Further Reading

-   [SvelteKit Adapters Documentation](https://svelte.dev/docs/kit/adapters)
-   [Vercel Adapter](https://svelte.dev/docs/kit/adapter-vercel)
-   [Netlify Adapter](https://svelte.dev/docs/kit/adapter-netlify)
-   [Cloudflare Adapter](https://svelte.dev/docs/kit/adapter-cloudflare)


## Technologies Used

-   [SvelteKit](https://kit.svelte.dev/)
-   [Svelte 5](https://svelte.dev/blog/runes) (using a rune-like pattern)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [TypeScript](https://www.typescriptlang.org/)