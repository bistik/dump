const { app, BrowserWindow, remote }  = require('electron');
const path = require('path');
const userDataPath = (app || remote.app).getPath('userData');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

let mainWindow;

function loadWindow () {
  mainWindow = new BrowserWindow({show: false, width: 1024, height: 768});
  console.log('env.NODE_ENV', process.env.NODE_ENV)
  mainWindow.loadURL(path.join('file://', __dirname, '../dist/index.html'));

  if (process.env.NODE_ENV == 'dev' || true) {
    require('electron-debug')();
    mainWindow.webContents.openDevTools();
    console.log('env.UPGRADE_EXTENSIONS', process.env.UPGRADE_EXTENSIONS);
    var upgradeExtensions = process.env.UPGRADE_EXTENSIONS == 1;
    installExtension(REACT_DEVELOPER_TOOLS, upgradeExtensions)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  }

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
}

app.on('ready', loadWindow);

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
