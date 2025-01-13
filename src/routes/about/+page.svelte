<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="wrapper">
	<h1 class="text-skin-base">Welcome to SvelteKit</h1>
	<p class="text-skin-muted">
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
	<p class="text-skin-base">This is the about page</p>
	<p class="text-skin-muted">The package name is {page.data.name}</p>
	<p class="text-skin-muted">The package version is {page.data.version}</p>
</div>
