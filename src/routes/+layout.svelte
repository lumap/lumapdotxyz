<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:image" content="https://lumap.xyz/favicon.ico" />
	<meta name="theme-color" content="#9E5BB9" />
</svelte:head>

<ModeWatcher defaultMode="system" />



<div class="font-sanFrancisco">
	{@render children()}
</div>
