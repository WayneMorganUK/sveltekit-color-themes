<script lang="ts">
	import ToggleDarkMode from '$lib/Header/ToggleDarkMode.svelte';
</script>

<header class="bg-skin-primary w-full">
	<div class="mx-auto flex h-12 max-w-7xl justify-between pl-2">
		<div class="text-skin-base flex flex-row items-center text-lg">
			<a class="hover:text-skin-selected ml-2 text-lg" href="/">Home</a>
			<a class="hover:text-skin-selected ml-8 text-lg" href="/about">About</a>
			<a class="hover:text-skin-selected ml-8 text-lg" href="/projects">Projects</a>
			<a class="hover:text-skin-selected ml-8 text-lg" href="/contact">Contact</a>
		</div>
		<div class="flex items-center">
			<ToggleDarkMode />
		</div>
	</div>
</header>
