export enum WindowTitles {
    Desktop = "Desktop",
    Hello = "Hello",
    Contact = "Contact",
    Friends = "Friends",
    BackgroundChanger = "Background Changer",
}

import { SvelteSet } from "svelte/reactivity"

class App {
    // The order of the windows in the focusOrder array determines the z-index of the windows (the last element is the topmost window)
    private focusOrder = new SvelteSet([WindowTitles.Hello, WindowTitles.Desktop]);
    focusedWindow = $state(WindowTitles.Hello);
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
        if (this.focusedWindow === windowTitle) this.focusedWindow = [...this.focusOrder][this.focusOrder.size - 1];
    }

    getZIndex(windowTitle: WindowTitles) {
        return [...this.focusOrder].indexOf(windowTitle);
    }
}

export const app = new App();