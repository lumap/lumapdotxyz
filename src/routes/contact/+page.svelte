<script lang="ts">
	import Fa from '$lib/components/FontAwesomeIcon.svelte';
	import ContactForm from './form.svelte';

	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types.js';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	export let data: PageData;
</script>

<div class="grid h-96 place-items-center">
	<h1 class="text-3xl">
		{$_('contact')}
	</h1>

	<p>You can contact me either via:</p>
	<ul>
		<li>
			<Fa icon={faDiscord} class="inline h-7 w-7" />
			Discord: <a href="https://discord.gg/7Z8t6Zy">My Contact Server</a>
		</li>
		<li>
			<Fa icon={faEnvelope} class="inline h-7 w-7" />
			Email: <a href="mailto:lumap@duck.com">lumap@duck.com</a>
		</li>
	</ul>

	<p>Or via the form below:</p>

	<ContactForm data={data.form} />
</div>
