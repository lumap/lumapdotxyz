export enum WindowTitles {
    Desktop = "Desktop",
    Hello = "Hello"
}

class App {
    focusedWindow = $state<WindowTitles>(WindowTitles.Hello);
    focusOrder = $state<WindowTitles[]>([]);
    openedWindows = $state<WindowTitles[]>([]);
    wallpaper = $state("/wallpaper.jpg");

    constructor() {
        this.focusOrder = [WindowTitles.Hello, WindowTitles.Desktop];
        this.openedWindows = [WindowTitles.Hello];
    }

    switchWindowFocus(windowTitle: WindowTitles) {
        this.focusOrder.push(this.focusedWindow);
        if (this.focusOrder.length >= 50) { // Prevent memory leak if arr too big somehow
            this.focusOrder.shift();
        }
        this.focusedWindow = windowTitle;
    }

    closeWindow(windowTitle: WindowTitles) {
        this.openedWindows = this.openedWindows.filter((title) => title !== windowTitle);
        this.focusedWindow = this.focusOrder[this.focusOrder.length - 1];
    }
}

export const app = new App();
