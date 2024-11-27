<script lang="ts">
    import { app, WindowTitles } from "$lib/app.svelte";
    import type { Snippet } from 'svelte';

    interface Props {
        title: WindowTitles;
        children: Snippet<[]>
    }

    let { title, children }: Props = $props();
    let thisWindow = app.windows[title]!;

    let showTrafficLightIcons = $state(false);
</script>

<svelte:window onmouseup={() => thisWindow.isMoving = false} onmousemove={(e: MouseEvent) => {
    if (thisWindow.isMoving) {
        thisWindow.x += e.movementX;
        thisWindow.y += e.movementY;
    }
}} />

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div
    class="fixed
        w-[50%] h-[45%] rounded-xl 
        bg-white dark:bg-slate-700 
        border-stone-500 border-[1px] 
        {app.focusedWindow === title ? "shadow-2xl" : ""} 
        {thisWindow.isOpened ? "block" : "hidden"}"
    style="left: {thisWindow.x}px; top: {thisWindow.y}px; z-index: {app.getZIndex(title)}"
    onmousedown={(e) => {
        e.stopPropagation();
        app.switchWindowFocus(title);
    }}
>
    <div
        class="w-full h-9 flex items-center px-3 select-none {thisWindow.isMoving ? "cursor-grabbing" : "cursor-grab"}
        border-b-slate-300 dark:border-b-slate-600 border-b-[1px]"
        onmousedown={() => thisWindow.isMoving = true}
    >
        <div class="flex-1">
            <div
                class="flex gap-2 w-fit cursor-default"
                onmouseenter={() => showTrafficLightIcons = true}
                onmouseleave={() => showTrafficLightIcons = false}
            >

                {#snippet trafficLight(color: string, path: string)}
                    <div class="w-3 h-3 {app.focusedWindow === title ? color : "bg-slate-600"} rounded-full grid place-items-center">
                        <img src={path} alt="Traffic light icon" class="size-[7px] {showTrafficLightIcons?"":"hidden"}">
                    </div>
                {/snippet}
                
                <button aria-label="Close Window" onmousedown={(e) => {
                    e.stopPropagation();
                    thisWindow.isMoving = false;
                    app.closeWindow(title);
                }}>
                    {@render trafficLight("bg-red-500", "/svg/close.svg")}
                </button>
            
                {@render trafficLight("bg-yellow-500", "/svg/minimize.svg")}
                {@render trafficLight("bg-green-500", "/svg/maximize.svg")}

            </div>
        </div>

        <div class="flex justify-center">
            <h1 class="text-lg font-bold">{title}</h1>
        </div>
        <div class="flex-1"></div>
    </div>

	<div class="p-3 h-[calc(100%-2.25rem)] flex flex-col relative gap-2">
        {@render children()}
    </div>
</div>