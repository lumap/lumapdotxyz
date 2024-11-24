<script lang="ts">
	import { WindowTitles } from "$lib/app.svelte";
	import Window from "$lib/components/Window.svelte";

	const birthDate = new Date('September 10, 2004');
	const age = Math.floor((Date.now() - birthDate.getTime()) / 31556952000);
</script>

<Window title={WindowTitles.Hello}>
	<h1 class="text-xl font-bold">
		Hi there!
	</h1>
	<p>
		I'm Lumap, a {age} y/o guy wandering on the interwebs, not doing much things apart from playing games.
	</p>
	<p>
		⚠️ This website is <strong>NOT</strong> adapted for mobile. I will make a mobile-friendly version eventually, but for now, you're stuck with this.
	</p>
	<p class="text-sm absolute bottom-3">
		This website is a work in progress and is not final, but I hope you like it! Just need to reimplement contact form and actually do some design in the windows, cuz this sucks wow
	</p>
</Window>