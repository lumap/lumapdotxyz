<script lang="ts">
	import Fa from '$lib/components/FontAwesomeIcon.svelte';
	import ContactForm from './form.svelte';

	import type { PageData } from './$types.js';
	import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	export let data: PageData;
</script>

<div class="grid place-items-center gap-4">
	<h1 class="text-3xl">
		Contact Me
	</h1>

	<p>You can contact me either via:</p>
	<ul>
		<li>
			<Fa icon={faEnvelope} class="inline h-7 w-7" />
			Email: <a class="text-blue-500 underline" href="mailto:lumap@duck.com">lumap@duck.com</a>
		</li>
	</ul>

	<p>Or via the form below:</p>

	<div class="w-3/4">
		<ContactForm data={data.form} />
	</div>
</div>
