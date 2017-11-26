const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$|\.scss$|\.sass$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'sass-loader'}
      ]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        {loader: 'babel-loader'}
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
