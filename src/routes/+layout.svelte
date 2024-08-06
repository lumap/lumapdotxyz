<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="relative">
	<Header></Header>

	<main class="w-full bg-zinc-50 p-2 font-mono">
		<slot></slot>
	</main>

	<Footer></Footer>
</div>
