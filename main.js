const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    if (process.argv[2] === 'dev') {
        win.loadURL('http://localhost:3000/');
    } else {
        win.loadFile('./client/build/index.html');
    }
};

app.whenReady().then(() => {
    createWindow();
    
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

