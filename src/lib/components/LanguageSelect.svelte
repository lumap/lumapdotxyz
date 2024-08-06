<script lang="ts">
	import Fa from './FontAwesomeIcon.svelte';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	import { locale, locales } from 'svelte-i18n';

	function changeLocale(lang: string) {
		locale.set(lang);
		document.cookie = `lang=${lang};path=/;max-age=31536000`;
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger><Fa icon={faGlobe} /></DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Choose your language</DropdownMenu.Label>
			<DropdownMenu.Separator />
			{#each $locales as lang}
				<DropdownMenu.Item on:click={() => changeLocale(lang)}>{lang}</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
