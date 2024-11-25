<script lang="ts">
	import { faSignalMessenger, faDiscord, faTelegram, faXTwitter, faBluesky, faSteam, type IconDefinition } from '@fortawesome/free-brands-svg-icons';
    import faNintendo from "$lib/customIcons/faNintendo.js";
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import FontAwesomeIcon from "$lib/components/FontAwesomeIcon.svelte";
</script>

<p>Hi, this website is not adapted for mobile just yet!</p>
<p>I do plan to do that in the form of a iOS recreation, it'll just take a while! I'm putting some finishing touches on the Desktop version in the next few days, but don't fret! mobile is coming!</p>
<br>
<p>Here's some of my socials. hope u like'em</p>

{#snippet socialsElm(icon: IconDefinition, text: string, link: string)}
	<div class="flex gap-2 m-2">
		<FontAwesomeIcon icon={icon} />
		<a href={link} class="text-blue-300">{text}</a>
	</div>
{/snippet}

{#each [
	{ icon: faSignalMessenger, text: "@lumap.01", link: "" },
	{ icon: faDiscord, text: "My Server", link: "https://discord.gg/Eq6P7yExKD" },
	{ icon: faTelegram, text: "@lumapmeow", link: "https://t.me/lumapmeow" },
	{ icon: faXTwitter, text: "@lumapmeow", link: "https://twitter.com/lumapmeow" },
	{ icon: faBluesky, text: "@lumap.xyz", link: "https://bsky.app/profile/lumap.xyz" },
	{ icon: faSteam, text: "lumap", link: "https://steamcommunity.com/id/lumap" },
	{ icon: faNintendo as IconDefinition, text: "SW-0976-3193-6406", link: "" },
	{ icon: faEnvelope, text: "lumap@duck.com", link: "mailto:lumap@duck.com" }
] as { icon, text, link }}
	{@render socialsElm(icon, text, link)}
{/each}