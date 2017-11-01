const { app, BrowserWindow, remote }  = require('electron');
const path = require('path');
const userDataPath = (app || remote.app).getPath('userData');
const sqlite3 = require('sqlite3').verbose();

let mainWindow;

function dbTest (db) {
  db.serialize(function() {
    db.run("CREATE TABLE lorem (info TEXT)");
   
    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();
   
    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
        console.log(row.id + ": " + row.info);
    });
  });
   
  db.close();
}
function loadWindow () {
  mainWindow = new BrowserWindow({show: false, width: 800, height: 600});
  mainWindow.loadURL(path.join('file://', __dirname, 'dist/index.html'));

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools();
  }

  console.log('userDataPath', userDataPath);
  mainWindow.test = 'testfoo';
  mainWindow.dbfile = userDataPath + '/dump.sqlite.db';
  mainWindow.sqlite3 = sqlite3;
  var db = new sqlite3.Database(mainWindow.dbfile);
  dbTest(db);

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
}

app.on('ready', loadWindow);
