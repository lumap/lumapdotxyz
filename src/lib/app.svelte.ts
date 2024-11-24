export enum WindowTitles {
    Desktop = "Desktop",
    Hello = "Hello",
    Contact = "Contact",
    BackgroundChanger = "Background Changer",
}

import { SvelteSet } from "svelte/reactivity"

class App {
    focusedWindow = $state(WindowTitles.Hello);
    focusOrder = $state<WindowTitles[]>([]);
    openedWindows = new SvelteSet<WindowTitles>([WindowTitles.Hello, WindowTitles.Desktop]);
    wallpaper = $state("/wallpaper.jpg");

    constructor() {
        this.focusOrder = [WindowTitles.Hello, WindowTitles.Desktop];
    }

    switchWindowFocus(windowTitle: WindowTitles) {
        this.focusOrder.push(this.focusedWindow);
        if (this.focusOrder.length >= 50) { // Prevent memory leak if arr too big somehow
            this.focusOrder.shift();
        }
        this.focusedWindow = windowTitle;
        this.openedWindows.add(windowTitle);
    }

    closeWindow(windowTitle: WindowTitles) {
        this.openedWindows.delete(windowTitle);
        this.focusOrder = this.focusOrder.filter((title) => title !== windowTitle);
        this.focusedWindow = this.focusOrder[this.focusOrder.length - 1];
    }
}

export const app = new App();
