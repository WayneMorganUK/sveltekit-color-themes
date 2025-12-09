<script lang="ts">
	// import { staticEnv} from '$env/static/public';
</script>

<div class="wrapper">
	<h1 class="font-poppins text-skin-base clamp-4xl">Welcome to SvelteKit</h1>
	<p class="text-skin-muted clamp-3xl">
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
	<div class="mx-auto flex w-screen flex-col items-center justify-center">
		<p class="text-skin-base clamp-xl">This is the home page</p>
		<div class="bg-col-base text-skin-base h-8 w-64">base</div>
		<div class="bg-col-primary text-skin-primary h-8 w-64">primary</div>
		<div class="bg-col-secondary text-skin-secondary h-8 w-64">secondary</div>
		<div class="bg-col-tertiary text-skin-tertiary h-8 w-64">tertiary</div>
		<div class="bg-col-selected text-skin-base h-8 w-64">selected with base text</div>
		<div class="bg-col-base text-skin-selected h-8 w-64">selected with base bg</div>
		<div class="bg-col-inverted text-skin-inverted h-8 w-64">inverted</div>
		<div class="bg-col-muted text-skin-muted h-8 w-64">muted</div>
		<div class="bg-col-muted-inverted text-skin-muted-inverted h-8 w-64">muted-inverted</div>
		<div class="bg-col-header text-skin-header h-8 w-64">header</div>
	</div>
</div>
