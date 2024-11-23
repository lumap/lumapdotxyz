<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import "../app.css"
	import MenuBar from "$lib/components/MenuBar.svelte";
	import app from "$lib/app.svelte";

	let { children } = $props();

</script>

<svelte:head>
	<meta property="og:image" content="https://lumap.xyz/favicon.webp" />
	<meta name="theme-color" content="#9E5BB9" />
</svelte:head>

<ModeWatcher defaultMode="system" />

<div class="font-sanFrancisco bg-[url('/wallpaper.jpg')] bg-cover bg-center h-screen">

	<MenuBar />

	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
	<div
		class="h-[calc(100%-1.75rem)]"
		onmousedown={() => {
			app.focusedWindow = "Desktop";
		}}
	>
		{@render children()}	
	</div>

</div>
