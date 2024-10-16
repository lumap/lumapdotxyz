<script lang="ts">
	import Fa from '$lib/components/FontAwesomeIcon.svelte';
	import ContactForm from './form.svelte';

	import type { PageData } from './$types.js';
	import { faSignalMessenger, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	export let data: PageData;
</script>

<div class="grid place-items-center gap-4">
	<h1 class="text-3xl py-8">
		Contact Me
	</h1>

	<div class="gap-12 grid xl:grid-cols-2 place-items-center">
		<ul class="flex flex-col gap-6">
			<li>
				<Fa icon={faSignalMessenger} class="inline h-7 w-7" />
				Signal: <code>lumap.01</code>
			</li>
			<li>
				<Fa icon={faDiscord} class="inline h-7 w-7" />
				Discord: <a class="text-blue-500 underline" href="https://discord.gg/Eq6P7yExKD">My Server</a>
			</li>
			<li>
				<Fa icon={faTelegram} class="inline h-7 w-7" />
				Telegram: <a class="text-blue-500 underline" href="https://t.me/lumapmeow">@lumapmeow</a>
			</li>
			<li>
				<Fa icon={faEnvelope} class="inline h-7 w-7" />
				Email: <a class="text-blue-500 underline" href="mailto:lumap@duck.com">lumap@duck.com</a>
			</li>
		</ul>
	
		<div class="w-3/4">
			<ContactForm data={data.form} />
		</div>
	</div>
</div>

