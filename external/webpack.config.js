// CommonJS
const path = require('path')

//exportar en commonJS
module.exports = {
  // entrada
  entry: path.resolve(__dirname, './src/index.js'),

  // --mode development or production
  mode: 'production',

  //salida
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
