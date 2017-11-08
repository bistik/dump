const { app, remote }  = require('electron');
const userDataPath = (app || remote.app).getPath('userData');
const sqlite3 = window.require('sqlite3').verbose();

//var db = new sqlite3.Database(mainWindow.dbfile);
let dbFile = userDataPath + '/dump.sqlite.db';
let _db = new sqlite3.Database(dbFile);

function createTables () {
    _db.serialize(function() {
      _db.run("CREATE TABLE IF NOT EXISTS folder (name TEXT, parent_id INTEGER default 0, created_ts INTEGER, modified_ts INTEGER)");
      _db.run("CREATE TABLE IF NOT EXISTS todo (body TEXT, folder_id INTEGER default 0, due_ts INTEGER, created_ts INTEGER)");
      _db.run("CREATE TABLE IF NOT EXISTS note (body TEXT, folder_id INTEGER default 0, created_ts INTEGER, modified_ts INTEGER)");
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

let Db = {
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
module.exports = Db;
