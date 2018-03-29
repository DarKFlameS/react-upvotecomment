var path = require('path');
var webpack = require('webpack');
var babel = require('babel-core');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env','react']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  mode: 'development'
};