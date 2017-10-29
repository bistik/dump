const { app, BrowserWindow }  = require('electron');
const path = require('path');
const foo = require('./foo.js');

let mainWindow;

function loadWindow () {
  mainWindow = new BrowserWindow({show: false, width: 800, height: 600});
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools();
  }

  foo();

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
}

app.on('ready', loadWindow);
