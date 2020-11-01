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
      // reglas para *.css
      {
        test: /\.css$/i, // regEx todos los .css
        use: [
          // 'style-loader', // injecta css en el document -recomendado para development
          {
            loader: MiniCSSExtractPlugin.loader, // crea archvos css -recomendado para produccion
          },
          'css-loader', // entiende css dentro de js
        ],
      },

      // reglas para *.js
      {
        test: /\.js$/i, // regEx todos los .js
        use: 'babel-loader',
        exclude: /node_modules/, // regExp para ignorar node_modules
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
