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
    let isMoving = $state(false);
    let isBeingResized = $state<"none"|"tl"|"tr"|"bl"|"br">("none"); // none, top-left, top-right, bottom-left, bottom-right

    let MIN_HEIGHT = 300;
    let MIN_WIDTH = 425;
</script>

<svelte:window
    onmouseup={() => {
        isMoving = false;
        isBeingResized = "none";
    }}
    onmousemove={(e: MouseEvent) => {
        if (app.isMobile) return;

        if (isMoving) {
            thisWindow.x += e.movementX;
            thisWindow.y += e.movementY;
        }

        switch (isBeingResized) {
            case "tl":
                thisWindow.width = Math.max(MIN_WIDTH, thisWindow.width - e.movementX);
                thisWindow.height = Math.max(MIN_HEIGHT, thisWindow.height - e.movementY);
                if (thisWindow.width !== MIN_WIDTH) thisWindow.x += e.movementX;
                if (thisWindow.height !== MIN_HEIGHT) thisWindow.y += e.movementY;
                break;
            case "tr":
                thisWindow.width = Math.max(MIN_WIDTH, thisWindow.width + e.movementX);
                thisWindow.height = Math.max(MIN_HEIGHT, thisWindow.height - e.movementY);
                if (thisWindow.height !== MIN_HEIGHT) thisWindow.y += e.movementY;
                break;
            case "bl":
                thisWindow.width = Math.max(MIN_WIDTH, thisWindow.width - e.movementX);
                thisWindow.height = Math.max(MIN_HEIGHT, thisWindow.height + e.movementY);
                if (thisWindow.width !== MIN_WIDTH) thisWindow.x += e.movementX;
                break;
            case "br":
                thisWindow.width = Math.max(MIN_WIDTH, thisWindow.width + e.movementX);
                thisWindow.height = Math.max(MIN_HEIGHT, thisWindow.height + e.movementY);
                break;
        }
    }}
/>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div
    class="fixed rounded-xl
        bg-white dark:bg-slate-700 
        border-stone-500 border-[1px] 
        {app.focusedWindow === title ? "shadow-2xl" : ""} 
        {thisWindow.isOpened ? "block" : "hidden"} 
        {isMoving || (isBeingResized !== "none") ? "pointer-events-none cursor-grabbing" : ""}"
    style="left: {thisWindow.x}px; top: {thisWindow.y}px; z-index: {app.getZIndex(title)}; width: {thisWindow.width === -1 ? "calc(100% - 8px)" : thisWindow.width+"px"}; height: {thisWindow.height === -1 ? "calc(100% - 104px)" : thisWindow.height+"px"};"
    onmousedown={(e) => {
        e.stopPropagation();
        app.switchWindowFocus(title);
    }}
>
    <!-- resizing corners -->
    <div
        class="absolute top-0 left-0 w-4 h-4 cursor-nw-resize z-50"
        onmousedown={(e) => {
            e.stopPropagation();
            isBeingResized = "tl";
        }}
    ></div>
        <div
        class="absolute top-0 right-0 w-4 h-4 cursor-ne-resize z-50"
        onmousedown={(e) => {
            e.stopPropagation();
            isBeingResized = "tr";
        }}
    ></div>
    <div
        class="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize z-50"
        onmousedown={(e) => {
            e.stopPropagation();
            isBeingResized = "bl";
        }}
    ></div>
    <div
        class="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50"
        onmousedown={(e) => {
            e.stopPropagation();
            isBeingResized = "br";
        }}
    ></div>

    <!-- top bar -->
    <div
        class="w-full h-9 flex items-center px-3 select-none cursor-grab 
        border-b-slate-300 dark:border-b-slate-600 border-b-[1px]"
        onmousedown={() => isMoving = true}
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
                    isMoving = false;
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