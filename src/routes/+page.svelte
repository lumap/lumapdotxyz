<script lang="ts">
	import { app, WindowTitles } from "$lib/app.svelte";

	import Hello from "$lib/windows/Hello.svelte";
	import Contact from "$lib/windows/Contact.svelte";
	import Friends from "$lib/windows/Friends.svelte";
	import Travel from "$lib/windows/Travel.svelte";
	import Projects from "$lib/windows/Projects.svelte";
	
	import BackgroundChanger from "$lib/windows/BackgroundChanger.svelte";
	import ThemeChanger from "$lib/windows/ThemeChanger.svelte";

	import DockIcon from "$lib/components/DockIcon.svelte";
	import MenuBar from "$lib/components/MenuBar.svelte";

	let root: HTMLElement;

	$effect(() => {
		if (document.body.offsetWidth < 768) {
			app.switchToMobile();
		}
		if (!app.shuffled) {
			app.shuffleWindowPositions(screen.width, screen.height);
		}

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
	<div class="absolute bottom-1 left-1/2 -translate-x-1/2 px-2 py-1 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-black/50 flex dark:text-white">
		{#each [
			{ icon: "/icons/finder.png", iconAlt: "macOS Finder Icon (Desktop)", title: WindowTitles.Desktop },
			{ icon: "/icons/spacer.png", iconAlt: "Spacer" },
			{ icon: "/icons/wave.png", iconAlt: "Apple Wave Emoji (Hello)", title: WindowTitles.Hello },
			{ icon: "/icons/speech_balloon.png", iconAlt: "Apple Phone Emoji (Contact)", title: WindowTitles.Contact },
			{ icon: "/icons/two_people.png", iconAlt: "Apple Friends Emoji (Friends)", title: WindowTitles.Friends },
			{ icon: "/icons/plane.png", iconAlt: "Apple Plane Emoji (Travel)", title: WindowTitles.Travel },
			{ icon: "/icons/briefcase.png", iconAlt: "Apple Briefcase Emoji (Work)", title: WindowTitles.Projects },
			{ icon: "/icons/spacer.png", iconAlt: "Spacer" },
			{ icon: "/icons/landscape.png", iconAlt: "Apple National Park Emoji (Change Wallpaper)", title: WindowTitles.BackgroundChanger },
			{ icon: "/icons/halfmoon.png", iconAlt: "Apple Last Quarter Moon Emoji (Theme Changer)", title: WindowTitles.ThemeChanger }
		] as { icon, iconAlt, title }}
			<DockIcon {icon} {iconAlt} {title} />
		{/each}
	</div>
{/snippet}


<div class="bg-cover bg-center h-dvh relative" bind:this={root}>
	<MenuBar />

	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
	<div
		class="h-full fixed dark:text-white"
		onmousedown={() => {
			app.switchWindowFocus(WindowTitles.Desktop);
		}}
	>
		<Hello />
		<Contact />
		<Friends />
		<Travel />
		<Projects />

		<BackgroundChanger />
		<ThemeChanger />
	</div>

	{@render dock()}
</div>

