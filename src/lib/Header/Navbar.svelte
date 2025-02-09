<script lang="ts">
	import ToggleDarkMode from '$lib/Header/ToggleDarkMode.svelte';
</script>

<header class="bg-col-primary w-full">
	<div class="mx-auto flex h-12 max-w-7xl justify-between pl-2">
		<div class="text-skin-base flex flex-row items-center text-3xl font-bold">
			<a class="hover:text-skin-selected ml-2" href="/">Home</a>
			<a class="hover:text-skin-selected ml-8" href="/about">About</a>
			<a class="hover:text-skin-selected ml-8" href="/projects">Projects</a>
			<a class="hover:text-skin-selected ml-8" href="/contact">Contact</a>
			<p class="ml-4">Version {__VERSION__}</p>
		</div>
		<div class="flex items-center">
			<ToggleDarkMode />
		</div>
	</div>
</header>
