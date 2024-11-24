<script lang="ts">
	import { WindowTitles } from "$lib/app.svelte";
	import Window from "$lib/components/Window.svelte";

	import Fa from "$lib/components/FontAwesomeIcon.svelte";
	import { faSignalMessenger, faDiscord, faTelegram, faXTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	const birthDate = new Date('September 10, 2004');
	const age = Math.floor((Date.now() - birthDate.getTime()) / 31556952000);
</script>

<Window title={WindowTitles.Hello}>
	<div class="p-3 h-[calc(100%-2.25rem)] flex flex-col relative gap-2">
		<h1 class="text-xl font-bold">
			Hi there!
		</h1>
		<p>
			I'm Lumap, a {age} y/o guy wandering on the interwebs, not doing much things apart from playing games.
		</p>
		<p>
			Here's some ways to contact me or keep in touch with me:
		</p>
		<ul>
			<li>
				<Fa icon={faSignalMessenger} class="w-5 h-5 inline-block" />
				<code>lumap.01</code>
			</li>
			<li>
				<Fa icon={faDiscord} class="inline h-7 w-7" />
				<a class="text-blue-300" href="https://discord.gg/Eq6P7yExKD">My Server</a>
			</li>
			<li>
				<Fa icon={faTelegram} class="inline h-7 w-7" />
				<a class="text-blue-300" href="https://t.me/lumapmeow">@lumapmeow</a>
			</li>
			<li>
				<Fa icon={faXTwitter} class="inline h-7 w-7" />
				<a class="text-blue-300" href="https://twitter.com/lumapmeow">@lumapmeow</a>
			</li>
			<li>
				<Fa icon={faBluesky} class="inline h-7 w-7" />
				<a class="text-blue-300" href="https://bsky.app/profile/lumap.xyz">@lumap.xyz</a>
			</li>
			<li>
				<Fa icon={faEnvelope} class="inline h-7 w-7" />
				<a class="text-blue-300" href="mailto:lumap@duck.com">lumap@duck.com</a>
			</li>
		</ul>
		<p class="text-sm absolute bottom-3">
			This website is a work in progress and is nowhere near final, but I hope you like it! Yes i'm constantly re-doing it, and? it's fun...
		</p>
	</div>
</Window>