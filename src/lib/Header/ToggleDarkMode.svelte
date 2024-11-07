<script lang="ts">
	import { theme } from '$lib/runes/theme.svelte';
	// import { icons } from '$lib/Icons/Icons';
	import Moon from '$lib/Icons/Moon.svelte';
	import BloodDrop from '$lib/Icons/BloodDrop.svelte';
	import Sun from '$lib/Icons/Sun.svelte';

	const icons = {
		light: Sun,
		dark: Moon,
		blood: BloodDrop
	};

	function changeTheme() {
		if (theme.state == 'light') {
			theme.state = 'dark';
		} else if (theme.state == 'dark') {
			theme.state = 'blood';
		} else {
			theme.state = 'light';
		}
		theme.update();
	}

	const SvelteComponent = $derived(icons[theme.state]);
</script>

<div class="bg-skin-secondary mr-2 flex h-8 w-8 items-center justify-center rounded-full">
	<button
		class="fill-base stroke-base hover:stroke-hover hover:fill-hover h-5 w-5 rounded-full"
		aria-label="Toggle Theme"
		onclick={changeTheme}
	>
		{#if theme.state == 'light'}
			<Sun />
		{/if}
		{#if theme.state == 'dark'}
			<Moon />
		{/if}
		{#if theme.state == 'blood'}
			<BloodDrop />
		{/if}
	</button>
</div>
<div class="bg-skin-secondary mr-2 flex h-8 w-8 items-center justify-center rounded-full">
	<button
		class="fill-base stroke-base hover:stroke-hover hover:fill-hover h-5 w-5 rounded-full"
		aria-label="Toggle Theme"
		onclick={changeTheme}
	>
		<SvelteComponent />
	</button>
</div>
