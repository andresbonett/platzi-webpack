// CommonJS
const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// opcional para que no recargue la pagina
const webpack = require('webpack')

//exportar en commonJS
module.exports = {
  // entrada
  entry: {
    home: path.resolve(__dirname, './src/js/index.js'),
  },

  // --mode development or production
  // mode: 'production',
  mode: 'development',

  //salida
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.css$/i, // regEx todos los .css
        use: [
          // 'style-loader', // injecta css en el document
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'css-loader', // entiende css dentro de js
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'webpack dev server',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    open: true,
    port: 9000,
  },
}
// webpack
// npm i -D webpack webpack-cli

// loaders
// npm i -D style-loader css-loader

// plugins
// npm i -D mini-css-extract-plugin html-webpack-plugin
