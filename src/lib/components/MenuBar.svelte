<script lang="ts">
    import { app } from "$lib/app.svelte";
</script>

<div class="absolute top-0 w-full h-7 backdrop-blur-xl bg-white/30 px-1 flex gap-4 font-normal items-center cursor-default select-none">
    <img src="/favicon.ico" class="h-7 aspect-square" alt="My website's Logo"/>

    <p class="font-bold">{app.focusedWindow}</p>
    <p>File</p>
    <p>Edit</p>
    <p>View</p>
    <p>Window</p>
    <p>Help</p>
</div>
