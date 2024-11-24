<script lang="ts">
    import { app, WindowTitles } from "$lib/app.svelte";
    import type { Snippet } from 'svelte';

    interface Props {
        title: WindowTitles;
        children: Snippet<[]>
    }

    let { title, children }: Props = $props();

    let x = $state(100);
    let y = $state(100);

    let moving = false;
</script>

<svelte:window onmouseup={() => moving = false} onmousemove={(e: MouseEvent) => {
    if (moving) {
        x += e.movementX;
        y += e.movementY;
    }
}} />

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div
    class="absolute
        w-[50%] h-[45%] rounded-xl 
        bg-white dark:bg-slate-700 
        border-stone-500 border-[1px] 
        {app.focusedWindow === title ? "shadow-2xl" : ""} 
        {app.openedWindows.has(title) ? "block" : "hidden"}"
    style="left: {x}px; top: {y}px;"
    onmousedown={(e) => {
        e.stopPropagation();
        app.switchWindowFocus(title);
    }}
>
    <div
        class="w-100 h-9 flex items-center px-3
        border-b-slate-300 dark:border-b-slate-600 border-b-[1px]"
        onmousedown={() => moving = true}
    >
        <div class="flex-1 flex gap-2">
            <button aria-label="Close Window" onmousedown={(e) => {
                e.stopPropagation();
                moving = false;
                app.closeWindow(title);
            }}>
                <div class="w-3 h-3 {app.focusedWindow === title ? "bg-red-500" : "bg-slate-600"} rounded-full"></div>
            </button>
            <div class="w-3 h-3 {app.focusedWindow === title ? "bg-yellow-500" : "bg-slate-600"} rounded-full"></div>
            <div class="w-3 h-3 {app.focusedWindow === title ? "bg-green-500" : "bg-slate-600"} rounded-full"></div>
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