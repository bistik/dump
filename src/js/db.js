const { app, remote }  = require('electron');
const userDataPath = (app || remote.app).getPath('userData');
const sqlite3 = window.require('sqlite3').verbose();

//var db = new sqlite3.Database(mainWindow.dbfile);
let dbFile = userDataPath + '/dumpsqlite.db';
let _db = new sqlite3.Database(dbFile);

function createTables () {
    _db.serialize(function() {
      _db.run("CREATE TABLE IF NOT EXISTS todo (info TEXT)");
      _db.run("CREATE TABLE IF NOT EXISTS notes (info TEXT)");
    });
}

function showInfo () {
  console.log(dbFile);
  _db.serialize(function() {
    _db.each("SELECT name FROM sqlite_master WHERE type='table'", function(err, row) {
      console.log('table: ', row.name);
    });  
  });
}

let db = {
  test: createTables,
  info: showInfo     
      /*
      var stmt = _db.prepare("INSERT INTO foobar VALUES (?)");
      for (var i = 0; i < 10; i++) {
          stmt.run("Ipsum " + i);
      }
      stmt.finalize();
     
      _db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
          console.log(row.id + ": " + row.info);
      });
      */
};
module.exports = db;
