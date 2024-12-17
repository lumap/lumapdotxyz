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
		I'm Lumap, a {age} y/o fr*nch guy wandering on the interwebs. I don't do much outside of finding/sending cat gifs app day.
	</p>
	<p>
		Here, have a cat gif to make ur day better:
	</p>
	<img class="w-[238px] h-[300px] rounded-sm" src="/appl.gif" alt="A cat gif" />
</Window>