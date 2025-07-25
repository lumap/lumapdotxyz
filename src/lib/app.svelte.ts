export enum WindowTitles {
    Desktop = 'Desktop',
    Hello = 'Hello',
    Contact = 'Contact',
    Friends = 'Friends',
    Travel = 'Travel',
    Projects = 'Projects',
    BackgroundChanger = 'Background Changer',
    ThemeChanger = 'Theme Changer'
}

import { SvelteSet } from 'svelte/reactivity';

type WindowState = {
    x: number;
    y: number;
    width: number;
    height: number;
    isOpened: boolean;
    title: WindowTitles;
};

type WindowType = Partial<{
    [key in WindowTitles]: WindowState;
}>;

class App {
    // The order of the windows in the focusOrder array determines the z-index of the windows (the last element is the topmost window)
    private focusOrder = new SvelteSet([WindowTitles.Hello]);
    focusedWindow = $state(WindowTitles.Hello);
    windows = $state<WindowType>({});
    wallpaper = $state('/wallpaper.jpeg');
    isMobile = $state(false);
    shuffled = $state(false);

    constructor() {
        const defaultOpenedWindows = [
            WindowTitles.Desktop,
            WindowTitles.Hello,
            WindowTitles.Contact,
            WindowTitles.Friends,
            WindowTitles.Travel,
            WindowTitles.Projects
        ];
        for (const key of Object.values(WindowTitles)) {
            if (defaultOpenedWindows.includes(key)) this.focusOrder.add(key);
            this.windows[key] = {
                x: 100,
                y: 100,
                width: 700,
                height: 450,
                isOpened: defaultOpenedWindows.includes(key),
                title: key
            } as WindowState;
        }
        
        const shuffledWindows = [...this.focusOrder].sort(() => Math.random() - 0.5);
        console.log(shuffledWindows, [...this.focusOrder])
        this.focusOrder = new SvelteSet(shuffledWindows);
        this.focusedWindow = [...this.focusOrder][this.focusOrder.size - 1];
    }

    switchWindowFocus(windowTitle: WindowTitles) {
        this.focusOrder.delete(windowTitle);
        this.focusOrder.add(windowTitle);

        this.focusedWindow = windowTitle;
        console.log('[app.switchWindowFocus] focusedWindow.windowTitle:', windowTitle);
        console.log('[app.switchWindowFocus] focusedWindow.windows:', $state.snapshot(this.windows));
        console.log('[app.switchWindowFocus] focusedWindow:', this.windows[windowTitle]);

        this.windows[windowTitle]!.isOpened = true;
    }

    closeWindow(windowTitle: WindowTitles) {
        this.windows[windowTitle]!.isOpened = false;
        this.focusOrder.delete(windowTitle);
        if (this.focusedWindow === windowTitle)
            this.focusedWindow = [...this.focusOrder][this.focusOrder.size - 1];
        console.log('[app.closeWindow] closed window:', windowTitle);
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

    shuffleWindowPositions(screenWidth: number, screenHeight: number) {
        for (const key of Object.values(WindowTitles)) {
            this.windows[key]!.x = Math.floor(Math.random() * (screenWidth * 0.7));
            this.windows[key]!.y = Math.floor(Math.random() * (screenHeight * 0.7));
        }
        
        this.shuffled = true;
    }
}

export const app = new App();
