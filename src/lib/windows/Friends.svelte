<script lang="ts">
	import { WindowTitles } from "$lib/app.svelte";
	import Window from "$lib/components/Window.svelte";
</script>

{#snippet fren(name: string, website: string)}
    <a href={website} class="text-center">
        <img class="rounded-full" src={`/friends/${name.toLowerCase()}.png`} alt="{name}'s pfp">
        <p>{name}</p>
    </a>
{/snippet}

<Window title={WindowTitles.Friends}>
    <h1 class="text-xl font-bold">
        My Friends
    </h1>
    

    <div class="grid grid-cols-6 gap-3">
        {#each [
            {
                name: "Link",
                website: "https://linkdiscord.xyz"
            },
            {
                name: "Instellate",
                website: "https://instellate.xyz"
            },
            {
                name: "Hayper",
                website: "https://hayper.xyz"
            },
            {
                name: "Kvba",
                website: "https://meowpa.ws"
            },
        ] as {name, website}}
            {@render fren(name, website)}
        {/each}
    </div>

    <p class="text-sm absolute bottom-3">
		Want to be added here? Ask me to!
	</p>
</Window>