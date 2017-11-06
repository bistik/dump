const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
  target: 'electron',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:8080/`,
    './src/js/main.js',
  ],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true
  },

  output: {
    // path: __dirname + '/dist',
    publicPath: 'http://localhost:8080/dist/',
    //filename: 'bundle.js'
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

  plugins: [
    new ExtractTextPlugin('styles.css'),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
      'process.env.UPGRADE_EXTENSIONS': JSON.stringify(true)
    }),

    new webpack.IgnorePlugin(new RegExp("^(sqlite3)")),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  node: {
    __dirname: false,
    __filename: false
  }

};

module.exports = config;
