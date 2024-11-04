<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Header/Navbar.svelte';
	import { page } from '$app/stores';
	import { theme } from '$lib/runes/theme.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	$inspect(theme.state);

	theme.state.mode = $page.data.theme;

	$effect(() => {
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				theme.state = { mode: 'dark' };
				theme.update();
			} else {
				theme.state = { mode: 'light' };
				theme.update();
			}
		}
	});
</script>

<svelte:head>
	<script lang="ts">
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }));
				document.cookie =
					'theme=dark;path=/;SameSite=strict;expires=Wed, 29 Dec 9999 23:59:59 GMT;';
			} else {
				document.cookie =
					'theme=light;path=/;SameSite=strict;expires=Thu, 30 Dec 9999 23:59:59 GMT;';
			}
		} else {
			if (localStorage.getItem('theme')) {
				let currentMode = JSON.parse(localStorage.getItem('theme'));
				document.documentElement.setAttribute('data-theme', currentMode.mode);
			}
		}
	</script>
	<title>Sveltekit &amp; Tailwind Dark Mode</title>
</svelte:head>

<main>
	<div class="bg-skin-bg fixed top-0 -z-10 min-h-screen w-full"></div>
	<Navbar />
	<section class="mx-auto mt-12 max-w-7xl md:mt-[56px]">
		{@render children?.()}
	</section>
</main>
