const search = async id => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data = await response.json()
  console.log(data)
  return data
}

export default search
