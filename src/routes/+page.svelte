<script lang="ts">
	import { app, WindowTitles } from "$lib/app.svelte";

	import Hello from "$lib/Windows/Hello.svelte";
	import Contact from "$lib/Windows/Contact.svelte";
	import Friends from "$lib/Windows/Friends.svelte";
	import BackgroundChanger from "$lib/Windows/BackgroundChanger.svelte";

	import DockIcon from "$lib/components/dockIcon.svelte";

	let root: HTMLElement;

	$effect(() => {
		root.style.backgroundImage = `url(${app.wallpaper})`;
	})
</script>

<svelte:head>
	<title>Lumap</title>
	<meta name="description" content="the silly website of a silly meower" />
</svelte:head>

{#snippet menuBar()}
	<div class="absolute top-0 w-full h-7 backdrop-blur-xl bg-white/30 px-1 flex gap-4 font-normal items-center cursor-default">
		<img src="/favicon.ico" class="h-7 aspect-square" alt="My website's Logo"/>

		<p class="font-bold">{app.focusedWindow}</p>
		<p>File</p>
		<p>Edit</p>
		<p>View</p>
		<p>Window</p>
		<p>Help</p>
	</div>
{/snippet}

{#snippet dock()}
	<div class="absolute bottom-1 left-1/2 -translate-x-1/2 p-2 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-black/50 flex gap-2">
		{#each [
			{ icon: "/icons/finder.png", iconAlt: "macOS Finder Icon (Desktop)", title: WindowTitles.Desktop },
			{ icon: "/icons/wave.png", iconAlt: "Apple Wave Emoji (Hello)", title: WindowTitles.Hello },
			{ icon: "/icons/phone.png", iconAlt: "Apple Phone Emoji (Contact)", title: WindowTitles.Contact },
			{ icon: "/icons/two_people.png", iconAlt: "Apple Friends Emoji (Friends)", title: WindowTitles.Friends },
			{ icon: "/icons/spacer.png", iconAlt: "Spacer" },
			{ icon: "/icons/landscape.png", iconAlt: "Apple National Park Emoji (Change Wallpaper)", title: WindowTitles.BackgroundChanger },
		] as { icon, iconAlt, title }}
			<DockIcon {icon} {iconAlt} {title} />
		{/each}
	</div>
{/snippet}


<div class="bg-cover bg-center h-dvh relative" bind:this={root}>
	{@render menuBar()}

	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
	<div
		class="h-full relative"
		onmousedown={() => {
			app.switchWindowFocus(WindowTitles.Desktop);
		}}
	>
		<Hello />
		<Contact />
		<Friends />

		<BackgroundChanger />
	</div>

	{@render dock()}
</div>

