<script lang="ts">
	import { WindowTitles } from '$lib/app.svelte';
	import Window from '$lib/components/Window.svelte';
</script>

{#snippet fren(btnURL: string, website: string)}
	<a href={website} class="w-[88px] h-[31px] relative">
        <img src={btnURL} class="w-[88px] h-[31px]" alt='88x31 button'/>
    </a>
{/snippet}

<Window title={WindowTitles.Friends}>
	<h1 class="text-xl font-bold">Me & My Friends</h1>

	<div class="grid md:grid-cols-8 grid-cols-4 gap-3">
		{#each [
            { btnURL: "/button.png", website: "https://lumap.xyz" },
            { btnURL: 'https://uwu.gal/button.png', website: 'https://uwu.gal/about-us' },
            { btnURL: "/button-inst.png", website: "https://instellate.xyz" }
        ] as { btnURL, website }}
			{@render fren(btnURL, website)}
		{/each}
	</div>

    <p class="absolute bottom-9 text-sm">Want to add my button? add <code class="border-slate-300 border-[1px] m-1 rounded-sm">&lt;&#97;&#32;&#104;&#114;&#101;&#102;&equals;&quot;&#104;&#116;&#116;&#112;&#115;&colon;&sol;&sol;&#108;&#117;&#109;&#97;&#112;&period;&#120;&#121;&#122;&quot;&gt;&lt;&#105;&#109;&#103;&#32;&#115;&#114;&#99;&equals;&quot;&#104;&#116;&#116;&#112;&#115;&colon;&sol;&sol;&#108;&#117;&#109;&#97;&#112;&period;&#120;&#121;&#122;&sol;&#98;&#117;&#116;&#116;&#111;&#110;&period;&#112;&#110;&#103;&quot;&#32;&#119;&#105;&#100;&#116;&#104;&equals;&quot;&#56;&#56;&quot;&#32;&#104;&#101;&#105;&#103;&#104;&#116;&equals;&quot;&#51;&#49;&quot;&#32;&#97;&#108;&#116;&equals;&apos;&#56;&#56;&#120;&#51;&#49;&#32;&#98;&#117;&#116;&#116;&#111;&#110;&apos;&#32;&sol;&gt;&lt;&sol;&#97;&gt;</code> to your website :p</p>
	<p class="absolute bottom-3 text-sm">Want to be added here? Ask me!</p>
</Window>
