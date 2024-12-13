<script lang="ts">
    import { app, WindowTitles } from "$lib/app.svelte";

    interface Props {
        icon: string;
        iconAlt: string;
        title?: WindowTitles;
    }

    let { icon, iconAlt, title }: Props = $props();

    let isTooltipVisible = $state(false);
</script>

<div
    class="relative size-12"
    onmouseenter={() => {
        if (!title) return;
        isTooltipVisible = true
}}
    onmouseleave={() => {
        if (!title) return;
        isTooltipVisible = false
}}
    role="tooltip"
>
    <p
        class="absolute top-[-40px] left-1/2 -translate-x-1/2 text-nowrap z-10
        {isTooltipVisible ? "block" : "hidden"} 
        bg-white dark:bg-black p-1 rounded-md"
    >
        {title}
    </p>

    <button
        class={title ? "" : "cursor-default"}
        onmousedown={(e)=>{
            if (!title) return;
            e.preventDefault();
            app.switchWindowFocus(title);
            if (app.isMobile) return;
            app.windows[title]!.x = 100;
            app.windows[title]!.y = 100;
            app.windows[title]!.width = 800;
            app.windows[title]!.height = 500;
        }}
    >
        <img class="size-12" src={icon} alt={iconAlt}>
    </button>
</div>