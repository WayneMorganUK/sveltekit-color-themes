<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Header/Navbar.svelte';
	import { theme } from '$lib/runes/localStorage.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	let { children } = $props();
	theme.value = page.data.theme;

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
		// document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
		let currentMode = localStorage.getItem('theme');
		if (!currentMode) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				currentMode = 'dark';
			} else {
				currentMode = 'light';
			}
			localStorage.setItem('theme', currentMode);
		}
		document.documentElement.setAttribute('data-theme', currentMode);
		document.cookie = `theme=${currentMode}; httpOnly:false; path=/; Secure=true; SameSite=lax; Max-Age=${60 * 60 * 24 * 365}`;
	</script>
	<title>Sveltekit &amp; Tailwind Dark Mode</title>
</svelte:head>

<main>
	<div class="bg-col-base fixed top-0 -z-10 min-h-screen w-full"></div>
	<Navbar />
	<section class="mx-auto mt-12 max-w-7xl md:mt-[56px]">
		{@render children?.()}
	</section>
</main>
