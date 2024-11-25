<script lang="ts">
	import { WindowTitles } from "$lib/app.svelte";
	import Window from "$lib/components/Window.svelte";
</script>

<Window title={WindowTitles.Friends}>
    <h1 class="text-xl font-bold">
        My Friends
    </h1>

    <p>This section is empty! (for now (i do have friends dw))</p>

    <p class="text-sm absolute bottom-3">
		Want to be added here? Ask me to!
	</p>
</Window>