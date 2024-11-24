<script lang="ts">
    import { WindowTitles } from "$lib/app.svelte";
	import Window from "$lib/components/Window.svelte";

    import Fa from "$lib/components/FontAwesomeIcon.svelte";
	import { faSignalMessenger, faDiscord, faTelegram, faXTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>

<Window title={WindowTitles.Contact}>
    <h1 class="text-xl font-bold">
        Contact Me
    </h1>

    <ul>
        <li>
            <Fa icon={faSignalMessenger} class="w-5 h-5 inline-block" />
            <code>lumap.01</code>
        </li>
        <li>
            <Fa icon={faDiscord} class="inline h-7 w-7" />
            <a class="text-blue-300" href="https://discord.gg/Eq6P7yExKD">My Server</a>
        </li>
        <li>
            <Fa icon={faTelegram} class="inline h-7 w-7" />
            <a class="text-blue-300" href="https://t.me/lumapmeow">@lumapmeow</a>
        </li>
        <li>
            <Fa icon={faXTwitter} class="inline h-7 w-7" />
            <a class="text-blue-300" href="https://twitter.com/lumapmeow">@lumapmeow</a>
        </li>
        <li>
            <Fa icon={faBluesky} class="inline h-7 w-7" />
            <a class="text-blue-300" href="https://bsky.app/profile/lumap.xyz">@lumap.xyz</a>
        </li>
        <li>
            <Fa icon={faEnvelope} class="inline h-7 w-7" />
            <a class="text-blue-300" href="mailto:lumap@duck.com">lumap@duck.com</a>
        </li>
    </ul>
</Window>