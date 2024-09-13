<script>
	import HeaderLink from './HeaderLink.svelte';
	import { Separator } from '$lib/components/ui/separator';

</script>

<header
	class="sticky top-0 w-full
	px-4
	bg-stone-100 text-stone-900
	dark:bg-stone-900 dark:text-stone-100"
>
    <div class="flex py-2">
		<img src="/favicon.webp" alt="The silly's pfp" class="w-10" />
		<nav class="flex items-center justify-around gap-4 ml-auto w-fit">
			<HeaderLink href="/" title="Home" />
			<HeaderLink href="/contact" title="Contact Me" />
		</nav>
	</div>

	<Separator />
</header>
