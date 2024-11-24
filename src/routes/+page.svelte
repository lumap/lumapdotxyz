<script lang="ts">
	import Hello from "$lib/windows/Hello.svelte";
	import { app, WindowTitles } from "$lib/app.svelte";
</script>

<svelte:head>
	<title>Lumap</title>
	<meta name="description" content="the silly website of a silly meower" />
</svelte:head>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div
	class="h-full"
	onmousedown={() => {
		app.focusedWindow = WindowTitles.Desktop;
	}}
>
	<div class="w-full h-full grid place-items-center">
		<Hello />
	</div>
</div>
