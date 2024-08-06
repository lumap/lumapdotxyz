<script>
	import HeaderLink from './HeaderLink.svelte';
</script>

<header class="sticky top-0 bg-white p-2 sm:flex sm:items-center">
	<img src="/favicon.webp" alt="The silly's pfp" class="hidden w-10 sm:block" />
	<nav class="flex justify-around sm:ml-auto sm:w-[400px]">
		<HeaderLink href="/" title="The Silly's Home" />
		<HeaderLink href="/about" title="Who?" />
		<HeaderLink href="/contact" title="Contact" />
	</nav>
</header>
