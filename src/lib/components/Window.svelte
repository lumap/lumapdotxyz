<script lang="ts">
    import { app, WindowTitles } from "$lib/app.svelte";
    import type { Snippet } from 'svelte';

    interface Props {
        title: WindowTitles;
        defaultWidth?: number;
        defaultHeight?: number;
        children: Snippet<[]>
    }

    let { title, defaultWidth = 80, defaultHeight = 85, children }: Props = $props();

    let window: HTMLElement;
    $effect(() => {
        window.style.width = `${defaultWidth}%`;
        window.style.height = `${defaultHeight}%`;
    })
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
    <div
        class="bg-white dark:bg-slate-700 rounded-xl {app.focusedWindow === title ? "shadow-2xl" : ""} border-stone-500 border-[1px] {app.openedWindows.includes(title) ? "block" : "hidden"}"
        onmousedown={(e) => {
            e.stopPropagation();
            app.focusedWindow = title;
        }}
        bind:this={window}
    >
    <div class="w-100 h-9 border-b-slate-300 dark:border-b-slate-600 border-b-[1px] flex items-center px-3">
        <div class="flex-1 flex gap-2">
            <div
                class="w-3 h-3 {app.focusedWindow === title ? "bg-red-500" : "bg-slate-600"} rounded-full"
                onmousedown={(e) => {
                    e.stopPropagation();
                    app.closeWindow(title);
                }}
            ></div>
            <div class="w-3 h-3 {app.focusedWindow === title ? "bg-yellow-500" : "bg-slate-600"} rounded-full"></div>
            <div class="w-3 h-3 {app.focusedWindow === title ? "bg-green-500" : "bg-slate-600"} rounded-full"></div>
        </div>

        <div class="flex justify-center">
            <h1 class="text-lg font-bold">{title}</h1>
        </div>
        <div class="flex-1"></div>
    </div>

    {@render children()}
</div>