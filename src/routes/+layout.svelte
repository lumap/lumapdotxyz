<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import { Toaster } from '$lib/components/ui/sonner';

	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<meta property="og:image" content="https://lumap.xyz/favicon.webp" />
	<meta name="theme-color" content="#9E5BB9" />
</svelte:head>

<Toaster />

<ModeWatcher defaultMode="system" />

<div
	class="relative flex
	min-h-screen flex-col items-center
	bg-stone-100 text-stone-900
	dark:bg-stone-900 dark:text-stone-100"
>
	<Header></Header>

	<main class="h-full w-full px-2 py-8 font-mono">
		{@render children?.()}
	</main>

	<Footer></Footer>
</div>
