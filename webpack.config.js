var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: 'assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: APP_PATH
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: APP_PATH
      }
    ]
  }
};