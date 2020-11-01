import { useState } from 'react'
import Loader from './loader'
import data from './data.json'

export default function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    console.log(data.loaders)
    setLoaderList(data.loaders)
  }

  return (
    <div>
      Que linda App en ReactJS
      <ul>
        {loaderList.map(item => (
          <Loader data={item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Mostrar Temas Aprendidos</button>
    </div>
  )
}
