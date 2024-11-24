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
    class="relative"
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
        class="absolute top-[-40px] left-1/2 -translate-x-1/2 text-nowrap 
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
        }}
    >
        <img class="size-14" src={icon} alt={iconAlt}>
    </button>
</div>