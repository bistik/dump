const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
  target: 'electron',

  entry: './src/js/main.js',

  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8080/dist/',
    filename: 'bundle.js'
  },

  externals: {
    sqlite3: "sqlite3"
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(js|jsxa)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }
    ]
  },

  node: {
    __dirname: false // __dirname resolves to '/' and not the current_dir when this is TRUE
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"dev"'
      }
    }),

    new webpack.IgnorePlugin(new RegExp("^(sqlite3)"))
  ]

};

module.exports = config;
