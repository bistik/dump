const path = require('path');
const webpack = require('webpack');

let config = {
  target: 'electron',

  entry: './src/js/index.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  node: {
    __dirname: false // __dirname resolves to '/' and not the current_dir when this is TRUE
  },

  plugins: [
  ]
};

module.exports = config;
