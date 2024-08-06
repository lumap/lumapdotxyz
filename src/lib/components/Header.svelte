<script>
	import HeaderLink from './HeaderLink.svelte';

	import LanguageSelect from './LanguageSelect.svelte';
	
	import { _ } from 'svelte-i18n'
</script>

<header class="sticky top-0 w-full
    bg-white dark:bg-black
    p-2
    sm:flex sm:items-center"
>
	<img src="/favicon.webp" alt="The silly's pfp" class="hidden w-10 sm:block" />
	<nav class="flex justify-around sm:ml-auto sm:w-[350px]">
		<HeaderLink href="/" title={$_("nav.home")} />
		<HeaderLink href="/about" title={$_("nav.about")} />
		<HeaderLink href="/contact" title={$_("nav.contact")} />

		<LanguageSelect />
	</nav>
</header>
