<script lang="ts">
	import app from "$lib/app.svelte";

	import Fa from "$lib/components/FontAwesomeIcon.svelte";
	import { faSignalMessenger, faDiscord, faTelegram, faXTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	const birthDate = new Date('September 10, 2004');
	const age = Math.floor((Date.now() - birthDate.getTime()) / 31556952000);
</script>

<svelte:head>
	<title>Lumap</title>
	<meta name="description" content="the silly website of a silly meower" />
</svelte:head>

<div class="w-full h-full grid place-items-center">
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
	 <div
	 	class="w-[85%] h-[85%] bg-white dark:bg-slate-700 rounded-xl {app.focusedWindow === "Hello!" ? "shadow-xl" : ""} border-stone-500 border-[1px] "
		onmousedown={(e) => {
			e.stopPropagation();
			app.focusedWindow = "Hello!";
		}}
	 >
		<div class="w-100 h-9 border-b-slate-600 border-b-[1px] flex items-center px-3">
			<div class="flex-1 flex gap-2">
				<div class="w-3 h-3 {app.focusedWindow === "Hello!" ? "bg-red-500" : "bg-slate-600"} rounded-full"></div>
				<div class="w-3 h-3 {app.focusedWindow === "Hello!" ? "bg-yellow-500" : "bg-slate-600"} rounded-full"></div>
				<div class="w-3 h-3 {app.focusedWindow === "Hello!" ? "bg-green-500" : "bg-slate-600"} rounded-full"></div>
			</div>

			<div class="flex justify-center">
				<h1 class="text-lg font-bold">Hello!</h1>
			</div>
			<div class="flex-1"></div>
		</div>

		<div class="p-3 h-[calc(100%-2.25rem)] flex flex-col relative gap-2">
			<h1 class="text-xl font-bold">
				Hi there!
			</h1>
			<p>
				I'm Lumap, a {age} y/o guy wandering on the interwebs, not doing much things apart from playing games.
			</p>
			<p>
				Here's some wayt to contact me or keep in touch with me:
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
	</div>
</div>
