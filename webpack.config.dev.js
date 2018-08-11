const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');


const config = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  resolve: {
    extensions: ['.js', '.less', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    watchContentBase: true,
  },
};

module.exports = config;