var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var browserSync = new BrowserSyncPlugin({
  server: {
    baseDir: ['public']
  }
});

module.exports = {
  devtool: 'source-map',
  entry: './source/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { // SCSS
        test: /\.scss$/,
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true, includePaths: ['./source/sass'] }}
        ]
      },
      { // JavaScript
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  plugins: [
    browserSync
  ]
};