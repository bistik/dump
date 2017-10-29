const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

module.exports = config;
