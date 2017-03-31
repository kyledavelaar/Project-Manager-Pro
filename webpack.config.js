const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    // publicPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    })
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
};
