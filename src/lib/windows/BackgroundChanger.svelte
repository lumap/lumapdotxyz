<script lang="ts">
	import Window from "$lib/components/Window.svelte";
    import { app, WindowTitles } from "$lib/app.svelte";

    let imagePicker: HTMLInputElement;

    $effect(() => {
        if (app.focusedWindow === WindowTitles.BackgroundChanger) {
            imagePicker.click();
            app.closeWindow(WindowTitles.BackgroundChanger)
        }

        imagePicker?.addEventListener("change", () => {
            const file = imagePicker.files?.[0];
            if (!file) return;
            file.arrayBuffer().then(buffer => {
                const blob = new Blob([buffer]);
                app.wallpaper = URL.createObjectURL(blob);
            })
        })
    })

</script>

<Window title={WindowTitles.BackgroundChanger}>
    <h1>Pick a wallpaper</h1>
    <input type="file" accept="image/*" class="hidden" bind:this={imagePicker} />
</Window>
