// CommonJS
const path = require('path')

//exportar en commonJS
module.exports = {
  // entrada
  entry: {
    home: path.resolve(__dirname, './src/index.js'),
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
        test: /\.css$/, // regEx todos los .css
        use: [
          'style-loader', // injecta css en el document
          'css-loader', // entiende css dentro de js
        ],
      },
    ],
  },
}
// webpack
// npm i -D webpack webpack-cli

// loaders
// npm i -D style-loader css-loader
