const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let win;

function createWindow() {
    const width = 800;
    const height = 600;
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