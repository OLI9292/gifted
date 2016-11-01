var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'static');
require('dotenv').config()

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: 'static/'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BASE_URL': JSON.stringify(process.env.BASE_URL),
        'API_TOKEN': JSON.stringify(process.env.API_TOKEN)
      }
    })
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
  },
  stylus: config.stylus,
};
