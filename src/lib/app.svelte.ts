export enum WindowTitles {
    Desktop = "Desktop",
    Hello = "Hello",
    Contact = "Contact",
    BackgroundChanger = "Background Changer",
}

import { SvelteSet } from "svelte/reactivity"

class App {
    focusedWindow = $state(WindowTitles.Hello);
    // The order of the windows in the focusOrder array determines the z-index of the windows (the last element is the topmost window)
    focusOrder = new SvelteSet([WindowTitles.Hello, WindowTitles.Desktop]);
    openedWindows = new SvelteSet<WindowTitles>([WindowTitles.Hello, WindowTitles.Desktop]);
    wallpaper = $state("/wallpaper.jpg");

    switchWindowFocus(windowTitle: WindowTitles) {
        this.focusOrder.delete(windowTitle);
        this.focusOrder.add(windowTitle);

        this.focusedWindow = windowTitle;
        this.openedWindows.add(windowTitle);
    }

    closeWindow(windowTitle: WindowTitles) {
        this.openedWindows.delete(windowTitle);
        this.focusOrder.delete(windowTitle);
        this.focusedWindow = this.focusOrder.values().next().value!;
    }

    getZIndex(windowTitle: WindowTitles) {
        return [...this.focusOrder].indexOf(windowTitle);
    }
}

export const app = new App();