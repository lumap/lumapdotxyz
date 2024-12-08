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
            <img class="rounded-full" src="https://cdn.discordapp.com/attachments/1258196206245380190/1315307915346968586/hayper_commission_2_05.08.2024.png?ex=6756ef74&is=67559df4&hm=ba0aec8f730f4a54d7cebabb51526b8444e49bebbd766de00527acbcd14f02d5&" alt="Hayper's pfp">
            <p>Hayper</p>
        </a>

        <a href="https://meowpa.ws" class="text-center">
            <img class="rounded-full" src="https://cdn.discordapp.com/avatars/105170831130234880/87bc8d3f06eedb8929123d037ff7f115.png?size=4096&width=1024&height=1024" alt="Kvba's pfp">
            <p>Kvba</p>
        </a>
    </div>

    <p class="text-sm absolute bottom-3">
		Want to be added here? Ask me to!
	</p>
</Window>