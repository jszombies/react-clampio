const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, './index.jsx'),
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: resolve(__dirname),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: resolve(__dirname),
    port: 8888,
  },
  module: {
    rules: [{
      test: /.*\.jsx/,
      use: 'babel-loader',
    }],
  },
};
