const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

module.exports = config;