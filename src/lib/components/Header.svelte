<script>
	import HeaderLink from './HeaderLink.svelte';
	import LanguageSelect from './LanguageSelect.svelte';
	import Fa from './FontAwesomeIcon.svelte';

	import { _ } from 'svelte-i18n';

	import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
	import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
</script>

<header
	class="sticky top-0 w-full
    bg-white p-2
    dark:bg-black
    sm:flex sm:items-center"
>
	<img src="/favicon.webp" alt="The silly's pfp" class="hidden w-10 sm:block" />
	<nav class="flex items-center justify-around sm:ml-auto sm:w-fit gap-4">
		<HeaderLink href="/" title={$_('nav.home')} />
		<HeaderLink href="/about" title={$_('nav.about')} />
		<HeaderLink href="/contact" title={$_('nav.contact')} />

		<a href="https://github.com/lumap">
			<Fa icon={faGithub} />
		</a>

		<a href="https://discord.gg/4ZXERRD4xG">
			<Fa icon={faDiscord} />
		</a>

		<Button on:click={toggleMode} variant="outline" size="icon">
			<Fa icon={faSun} class="dark:hidden" />
			<Fa icon={faMoon} class="hidden dark:block" />
			<span class="sr-only">Toggle theme</span>
		</Button>

		<Button variant="outline" size="icon">
			<LanguageSelect />
		</Button>
	</nav>
</header>
