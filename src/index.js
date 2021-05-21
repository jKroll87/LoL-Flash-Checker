const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let win;

function createWindow() {
    const width = 300;
    const height = 300;
    const margin = 30;

    win = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
        },
        titleBarStyle: 'hidden',
        frame: false,
        transparent: true,
        x: margin,
        y: margin,
    });

    win.setAlwaysOnTop(true, 'screen');
    win.setIgnoreMouseEvents(true);

    win.loadFile(path.join(__dirname, 'index.html'));

    win.setMenu(null);

    globalShortcut.register('CommandOrControl+Z', () => {
        console.log("Top");
    });
    globalShortcut.register('CommandOrControl+X', () => {
        console.log("JG");
    });
    globalShortcut.register('CommandOrControl+C', () => {
        console.log("MID");
    });
    globalShortcut.register('CommandOrControl+V', () => {
        console.log("AD");
    });
    globalShortcut.register('CommandOrControl+B', () => {
        console.log("SUP");
    });

    win.on('close', () => { win = null });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})