<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	import { isLoading as areLangsLoading } from "svelte-i18n";
</script>

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
