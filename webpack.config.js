const path = require('path');

let config = {
  target: 'electron',
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  node: {
    __dirname: false // __dirname resolves to '/' and not the current_dir when this is TRUE
  }
};

module.exports = config;
