<script lang="ts">
	import { WindowTitles } from '$lib/app.svelte';
	import Window from '$lib/components/Window.svelte';
	const projects: string[][] = [
	    ["This website", "https://github.com/lumap/lumapdotxyz"],
		["PetPet (30k+ users)", 'https://github.com/lumap/petpet'],
		["Jasper (140k+ users)", 'https://github.com/lumap/jasper'],
		["Grow A Tree (200k+ servers)", "https://discord.com/oauth2/authorize?client_id=972637072991068220"]
	]
</script>
    
<Window title={WindowTitles.Projects}>
	<h1 class="text-xl font-bold">Things I work on</h1>
	<p>Sometimes in life, I decide to do stuff. Here's some of those things.</p>
	<ul class="list-disc pl-4">
		{#each projects as p}
		    <li class="list-item"><a class="text-blue-500 underline" href={p[1]}>{p[0]}</a></li>
		{/each}
	</ul>
</Window>
