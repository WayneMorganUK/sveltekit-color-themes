<script lang="ts">
	import { theme } from '$lib/runes/theme.svelte';
	import { icons } from '$lib/Icons/Icons';

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
		<SvelteComponent />
	</button>
</div>
