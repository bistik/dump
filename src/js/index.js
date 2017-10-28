const { app, BrowserWindow }  = require('electron');
const path = require('path');
const foo = require('./foo.js');

let mainWindow;
const DEBUG = true;

function loadWindow () {
  mainWindow = new BrowserWindow({show: false});
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));

  if (DEBUG) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    foo();
  });
}

app.on('ready', loadWindow);
