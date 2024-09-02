<script>
	import HeaderLink from './HeaderLink.svelte';
</script>

<header
	class="sticky top-0 w-full
    bg-white p-2
    dark:bg-black
    sm:flex sm:items-center"
>
	<img src="/favicon.webp" alt="The silly's pfp" class="hidden w-10 sm:block" />
	<nav class="flex items-center justify-around gap-4 sm:ml-auto sm:w-fit">
		<HeaderLink href="/" title="Home" />
		<HeaderLink href="/contact" title="Contact Me" />
	</nav>
</header>
