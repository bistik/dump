
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
var foo = function () {

  if (myWindow.sqlite3) {
    let db = new myWindow.sqlite3.Database(myWindow.dbfile);
    console.log('has window.db');
//    dbTest(db);
  } else {
    console.log('No window.db');
  }
};

module.exports = foo;
