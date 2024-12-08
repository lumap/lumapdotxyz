<script lang="ts">
	import { WindowTitles } from "$lib/app.svelte";
	import Window from "$lib/components/Window.svelte";
</script>

<Window title={WindowTitles.Friends}>
    <h1 class="text-xl font-bold">
        My Friends
    </h1>

    <div class="h-full w-full grid grid-cols-6 grid-rows-3">
        <a href="https://hayper.xyz" class="text-center">
            <img class="rounded-full" src="/friends/hayper.png" alt="Hayper's pfp">
            <p>Hayper</p>
        </a>

        <a href="https://meowpa.ws" class="text-center">
            <img class="rounded-full" src="/friends/kvba.png" alt="Kvba's pfp">
            <p>Kvba</p>
        </a>
    </div>

    <p class="text-sm absolute bottom-3">
		Want to be added here? Ask me to!
	</p>
</Window>