var path = require('path');

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
        test: /\.scss$|css$/,
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true, includePaths: ['./source/sass'] }}
        ]
      },
      { // JavaScript
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
};