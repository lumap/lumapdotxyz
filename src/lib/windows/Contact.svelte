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
    <div class="absolute w-1/4 h-full top-0 left-0 border-slate-300 dark:border-slate-600 border-r-[1px] flex flex-col gap-2 p-2">
        {#snippet navBarElm(tab: string, icon: IconDefinition, text: string)}
            <button onmousedown={() => selectedTab = tab}>
                <div class="{selectedTab === tab ? 'bg-slate-300 dark:bg-slate-600' : 'bg-transparent'} flex gap-2 p-1 rounded-md items-center">
                    <FontAwesomeIcon icon={icon} /> {text}
                </div>
            </button>
        {/snippet}


        {#each [
            { tab: "socials", icon: faEnvelope, text: "Socials" },
            { tab: "contact", icon: faPenToSquare, text: "Write to me" }
        ] as { tab, icon, text }}
            {@render navBarElm(tab, icon, text)}
        {/each}
    </div>

    <div class="absolute w-3/4 h-full top-0 left-1/4 p-3">
        {#if selectedTab === "socials"}
            <div class="grid grid-cols-5 gap-2 gap-y-10">
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
                    { icon: faDiscord, text: "My Server", link: "https://discord.gg/Eq6P7yExKD" },
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
        {:else}
            <p>Work in progress!</p>
        {/if}
    </div>
</Window>