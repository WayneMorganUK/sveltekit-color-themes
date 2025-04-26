<script lang="ts">
	import { theme } from '$lib/runes/localStorage.svelte';
	import Moon from '$lib/Icons/Moon.svelte';
	import BloodDrop from '$lib/Icons/BloodDrop.svelte';
	import Sun from '$lib/Icons/Sun.svelte';

	function changeTheme() {
		if (theme.value == 'light') {
			theme.value = 'dark';
		} else if (theme.value == 'dark') {
			theme.value = 'blood';
		} else {
			theme.value = 'light';
		}
	}
</script>

<div class="bg-col-secondary mr-2 flex h-8 w-8 items-center justify-center rounded-full">
	<button
		class="fill-base stroke-base hover:stroke-hover hover:fill-hover h-5 w-5 rounded-full"
		aria-label="Toggle Theme"
		onclick={changeTheme}
	>
		<Sun />
		<Moon />
		<BloodDrop />
	</button>
</div>
