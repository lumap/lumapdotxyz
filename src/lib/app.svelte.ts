export enum WindowTitles {
    Desktop = "Desktop",
    Hello = "Hello",
    Contact = "Contact",
    Friends = "Friends",
    BackgroundChanger = "Background Changer",
}

import { SvelteSet } from "svelte/reactivity"

type WindowState = {
    x: number;
    y: number;
    width: number;
    height: number;
    isOpened: boolean;
    title: WindowTitles
}

type WindowType = Partial<{
    [key in WindowTitles]: WindowState
}>;

class App {
    // The order of the windows in the focusOrder array determines the z-index of the windows (the last element is the topmost window)
    private focusOrder = new SvelteSet([WindowTitles.Hello, WindowTitles.Desktop]);
    focusedWindow = $state(WindowTitles.Hello);
    windows = $state<WindowType>({});
    wallpaper = $state("/wallpaper.jpg");
    isMobile = $state(false);

    constructor() {
        const defaultOpenedWindows = [WindowTitles.Desktop, WindowTitles.Hello]
        for (const key of Object.values(WindowTitles)) {
            this.windows[key] = {
                x: 100,
                y: 100,
                width: 800,
                height: 500,
                isOpened: defaultOpenedWindows.includes(key),
                title: key
            } as WindowState
        }
    }

    switchWindowFocus(windowTitle: WindowTitles) {
        this.focusOrder.delete(windowTitle);
        this.focusOrder.add(windowTitle);

        this.focusedWindow = windowTitle;
        console.log("[app.switchWindowFocus] focusedWindow.windowTitle:", windowTitle);
        console.log("[app.switchWindowFocus] focusedWindow.windows:", $state.snapshot(this.windows));
        console.log("[app.switchWindowFocus] focusedWindow:", this.windows[windowTitle]);

        this.windows[windowTitle]!.isOpened = true
    }

    closeWindow(windowTitle: WindowTitles) {
        this.windows[windowTitle]!.isOpened = false
        this.focusOrder.delete(windowTitle);
        if (this.focusedWindow === windowTitle) this.focusedWindow = [...this.focusOrder][this.focusOrder.size - 1];
    }

    getZIndex(windowTitle: WindowTitles) {
        return [...this.focusOrder].indexOf(windowTitle);
    }

    switchToMobile() {
        this.isMobile = true;
        for (const key of Object.values(WindowTitles)) {
            this.windows[key]!.x = 4;
            this.windows[key]!.y = 32;
            this.windows[key]!.width = -1;
            this.windows[key]!.height = -1;
        }
    }
}

export const app = new App();