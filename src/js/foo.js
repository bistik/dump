const electron = require('electron');
const userDataPath = (electron.app || electron.remote.app).getPath('userData');
const Datastore = require('nedb');

var foo = function () {
  console.log('userDataPath', userDataPath);
  const db = new Datastore({ filename: userDataPath + '/dump.nedb', autoload: true });
  db.insert({message: 'Hello World'}, function (err, newDoc) {
    console.log('successful insert');
  });
}

module.exports = foo;
