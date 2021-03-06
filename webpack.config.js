'use strict';

const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: /src/,
        loader: 'babel-loader',
      },
    ],
  },
};
