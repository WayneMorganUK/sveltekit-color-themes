<script lang="ts">
	import { theme } from '$lib/runes/theme.svelte';
	import { toggleThemeRune } from '$lib/Header/toggle.svelte';
	import { icons } from '$lib/Icons/Icons';

	let current_theme: ThemeType = $derived(theme.state.mode);

	function changeTheme() {
		// toggleTheme(theme, $theme);
		toggleThemeRune();
		// current_theme = theme.state.mode;
		// console.log('value is ', value);
	}

	const SvelteComponent = $derived(icons[current_theme]);
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
