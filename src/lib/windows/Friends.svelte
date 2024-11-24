<script lang="ts">
	import { WindowTitles } from "$lib/app.svelte";
	import Window from "$lib/components/Window.svelte";
</script>

<Window title={WindowTitles.Friends}>
    <h1 class="text-xl font-bold">
        My Friends
    </h1>

    <ul class="text-blue-400 underline">
        <li>
            <a href="meowpa.ws">kvba</a>
        </li>
        <li>
            <a href="https://linkdiscord.xyz/">Link</a>
        </li>
    </ul>

    <p class="text-sm absolute bottom-3">
		Want to be added here? Ask me to!
	</p>
</Window>