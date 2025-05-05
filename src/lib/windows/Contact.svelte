<script lang="ts">
    import { WindowTitles } from "$lib/app.svelte";
	import Window from "$lib/components/Window.svelte";

    import FontAwesomeIcon from "$lib/components/FontAwesomeIcon.svelte";
	import { faSignalMessenger, faDiscord, faTelegram, faXTwitter, faBluesky, faSteam, type IconDefinition } from '@fortawesome/free-brands-svg-icons';
    import faNintendo from "$lib/customIcons/faNintendo.js";
	import { faEnvelope, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

    let selectedTab = $state("socials")
</script>


<Window title={WindowTitles.Contact}>
    <div class="p-3">
        <div class="grid grid-cols-3 md:grid-cols-5 gap-2 gap-y-10">
            {#snippet socialsElm(icon: IconDefinition, text: string, link: string)}
            <div>
                {#if link !== ""}
                <a class="flex text-sm flex-col items-center text-center gap-2" href={link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} class="size-14" />
                    {text}
                </a>
                {:else}
                <div class="flex text-sm flex-col items-center text-center gap-2">
                    <FontAwesomeIcon icon={icon} class="size-14" />
                    {text}
                </div>
                {/if}
            </div>
            {/snippet}

            {#each [
                { icon: faSignalMessenger, text: "lumap.01", link: "" },
                { icon: faDiscord, text: "lumap", link: "" },
                { icon: faTelegram, text: "lumapmeow", link: "https://t.me/lumapmeow" },
                { icon: faXTwitter, text: "lumapmeow", link: "https://twitter.com/lumapmeow" },
                { icon: faBluesky, text: "lumap.xyz", link: "https://bsky.app/profile/lumap.xyz" },
                { icon: faSteam, text: "lumap", link: "https://steamcommunity.com/id/lumap" },
                { icon: faNintendo as IconDefinition, text: "SW-0976-3193-6406", link: "" },
                { icon: faEnvelope, text: "lumap@duck.com", link: "mailto:lumap@duck.com" }
            ] as { icon, text, link }}
                {@render socialsElm(icon, text, link)}
            {/each}
        </div>
    </div>
</Window>