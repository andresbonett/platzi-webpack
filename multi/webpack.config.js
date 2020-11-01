// CommonJS
const path = require('path')

//exportar en commonJS
module.exports = {
  // entrada
  entry: {
    home: path.resolve(__dirname, './src/index.js'),
    contact: path.resolve(__dirname, './src/contact.js'),
    about: path.resolve(__dirname, './src/about.js'),
  },

  // --mode development or production
  mode: 'production',

  //salida
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
}
