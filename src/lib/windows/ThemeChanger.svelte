<script lang="ts">
	import Window from "$lib/components/Window.svelte";
    import { app, WindowTitles } from "$lib/app.svelte";

    $effect(() => {
        if (app.focusedWindow === WindowTitles.ThemeChanger) {
            document.body.classList.toggle("dark");
            app.closeWindow(WindowTitles.ThemeChanger)
        }
    })

</script>

<Window title={WindowTitles.ThemeChanger}>
    <span>meow</span>
</Window>
