<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import "../app.css"
	import MenuBar from "$lib/components/MenuBar.svelte";
	import { app } from "$lib/app.svelte";

	let { children } = $props();

	let root: HTMLElement;

	$effect(() => {
		root.style.backgroundImage = `url(${app.wallpaper})`;
	})
</script>

<svelte:head>
	<meta property="og:image" content="https://lumap.xyz/favicon.ico" />
	<meta name="theme-color" content="#9E5BB9" />
</svelte:head>

<ModeWatcher defaultMode="system" />

<div class="font-sanFrancisco bg-cover bg-center h-dvh relative" bind:this={root}>

	<MenuBar />

	{@render children()}	

</div>
