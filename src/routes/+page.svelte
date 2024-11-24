<script lang="ts">
	import Hello from "$lib/windows/Hello.svelte";
	import { app, WindowTitles } from "$lib/app.svelte";


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


{#snippet dockIcon(icon: string, iconAlt: string, title: WindowTitles)}
    <button onmousedown={(e)=>{
        e.preventDefault();
        app.switchWindowFocus(title);
    }}>
        <img class="size-14" src={icon} alt={iconAlt}>
    </button>
{/snippet}

{#snippet dock()}
	<div class="absolute bottom-1 left-1/2 -translate-x-1/2 p-1 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-black/50 flex gap-2">
		{#each [
			{ icon: "/icons/finder.png", iconAlt: "macOS Finder Icon", title: WindowTitles.Desktop },
			{ icon: "/icons/wave.png", iconAlt: "macOS Finder Icon", title: WindowTitles.Hello },
		] as { icon, iconAlt, title }}
			{@render dockIcon(icon, iconAlt, title)}
		{/each}
	</div>
{/snippet}


<div class="bg-cover bg-center h-dvh relative" bind:this={root}>
	{@render menuBar()}

	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
	<div
		class="h-full"
		onmousedown={() => {
			app.switchWindowFocus(WindowTitles.Desktop);
		}}
	>
		<div class="w-full h-full grid place-items-center">
			<Hello />
		</div>
	</div>

	{@render dock()}
</div>

