<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Header/Navbar.svelte';
	import { theme } from '$lib/runes/localStorage.svelte';
	import { onMount } from 'svelte';

	$inspect(theme.value);
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	$inspect(theme.value);

	onMount(() => {
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				theme.value = 'dark';
			} else {
				theme.value = 'light';
			}
		}
	});
</script>

<svelte:head>
	<script lang="ts">
		document.documentElement.setAttribute('data-themer', localStorage.getItem('theme'));
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
				document.cookie = `theme=dark;path=/;SameSite=lax;maxAge: ${60 * 60 * 24 * 365}`;
			} else {
				document.documentElement.setAttribute('data-theme', 'light');
				document.cookie = `theme=light;path=/;SameSite=lax;maxAge: ${60 * 60 * 24 * 365}`;
			}
		} else {
			if (localStorage.getItem('theme')) {
				let currentMode = localStorage.getItem('theme');
				document.documentElement.setAttribute('data-theme', currentMode);
				document.cookie = `theme=${currentMode};path=/;SameSite=lax;maxAge: ${60 * 60 * 24 * 365}`;
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
