<script lang="ts">
	import { WindowTitles } from '$lib/app.svelte';
	import Window from '$lib/components/Window.svelte';
	
	const countries: string[] = [
		'France',
		'United Kingdom (only England so far)',
		'Belgium',
		'Spain',
		'Portugal',
		'Czech Republic',
		'Switzerland',
		'Netherlands',
		'Italy'
	];
</script>

<Window title={WindowTitles.Travel}>
	<h1 class="text-xl font-bold">Places I've been to</h1>
	<p>
		Here's a non-exhaustive list of countries I've visited so far. I'll keep this updated whenever I
		visit another country! My goal is to visit as many of them as possible!
	</p>
	<ul class="list-disc pl-4">
		{#each countries as c}
		    <li class="list-item">{c}</li>
		{/each}
	</ul>
</Window>
