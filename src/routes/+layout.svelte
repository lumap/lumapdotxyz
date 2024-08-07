<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	import { isLoading as areLangsLoading } from 'svelte-i18n';
</script>

<svelte:head>
    <meta property="og:image" content="https://lumap.xyz/favicon.webp" />
    <meta name="theme-color" content="#9E5BB9" />
</svelte:head>

<ModeWatcher />

<div
	class="relative flex
	min-h-screen flex-col items-center
	bg-stone-100 text-stone-900
	dark:bg-stone-900 dark:text-stone-100"
>
	<Header></Header>

	<main class="h-full w-full p-2 font-mono">
		{#if $areLangsLoading}
			<p>Loading...</p>
		{:else}
			<slot></slot>
		{/if}
	</main>

	<Footer></Footer>
</div>
