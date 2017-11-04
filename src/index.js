const { app, BrowserWindow, remote }  = require('electron');
const path = require('path');
const userDataPath = (app || remote.app).getPath('userData');

let mainWindow;

function loadWindow () {
  mainWindow = new BrowserWindow({show: false, width: 800, height: 600});
  mainWindow.loadURL(path.join('file://', __dirname, '../dist/index.html'));

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools();
  }

  console.log('userDataPath', userDataPath);
 // mainWindow.test = 'testfoo';
 // mainWindow.dbfile = userDataPath + '/dump.sqlite.db';
  //var db = new sqlite3.Database(mainWindow.dbfile);
  //dbTest(db);

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
}

app.on('ready', loadWindow);
