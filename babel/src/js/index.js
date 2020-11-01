import '../style.css'
import app from './app'

app()

if (module.hot) {
  module.hot.accept('./app.js', function () {
    console.log('he recargado en caliente')
    app()
  })
}
