'use strict';

let webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    url: '/'
  },
  module: {
    preLoaders: [
      { test: /\.csv$/, loader: 'dsv-loader' },
      { test: /\.md$/, loader: 'html-loader!markdown-loader' },
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.es6|js|tag$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({riot: 'riot'})
  ]
};
