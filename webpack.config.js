'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {
    resolve
} = require('path')

module.exports = {
  entry: './Client/main',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [{
      test: /jsx?$/,
      include: resolve(__dirname, './Client'),
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['react', "stage-2"]
        }
      }]
    }]
  }
}
