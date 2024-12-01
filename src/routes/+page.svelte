<script lang="ts">
	import { app, WindowTitles } from "$lib/app.svelte";

	import Hello from "$lib/windows/Hello.svelte";
	import Contact from "$lib/windows/Contact.svelte";
	import Friends from "$lib/windows/Friends.svelte";
	import BackgroundChanger from "$lib/windows/BackgroundChanger.svelte";

	import DockIcon from "$lib/components/DockIcon.svelte";
	import MenuBar from "$lib/components/MenuBar.svelte";

	let root: HTMLElement;

	$effect(() => {
		root.style.backgroundImage = `url(${app.wallpaper})`;
	})
</script>

<svelte:head>
	<title>Lumap</title>
	<meta name="description" content="the silly website of a silly meower" />
</svelte:head>

<svelte:window onkeydown={(e: KeyboardEvent)=>{
	const target = e.target as HTMLElement | null;
	if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") return;
	if (e.key === "w" && app.focusedWindow !== WindowTitles.Desktop) {
		app.closeWindow(app.focusedWindow);
	}
}}
></svelte:window>

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
	<MenuBar />

	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
	<div
		class="h-full fixed"
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

