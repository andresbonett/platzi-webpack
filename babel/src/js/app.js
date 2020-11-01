import render from './render'
import search from './search'

function app() {
  const id = prompt('Cual es este Pokemon?')
  search(id)
    .then(data => {
      console.log(data)
      render(data)
    })
    .catch(err => {
      console.log(err)
      document.body.innerHTML = `No Hay Pokemon ${id}`
    })
}

export default app
