const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const basePath = __dirname

module.exports = {
  mode: 'development',
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: {
    app: './index.ts'
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /.tsx?$/, loader: 'ts-loader' }]
  },
  devServer: {
    contentBase: path.join(basePath, 'dist')
  },
  plugins: [new HtmlWebpackPlugin()]
}
