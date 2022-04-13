const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
  .then( data => {
    console.log(data.info.count)
    console.log('primera consulta')
    console.log(`${API}${data.results[0].id}`)

    return fetchData(`${API}${data.results[0].id}`)  // el resultado de esta respuesta la utilizo en la linea nueve
  })
  .then(data => {
    console.log('segunda consulta')

    console.log(data.name)
    return fetchData(data.origin.url) // el resultado de esta respuesta la utilizo en la linea 13
  })
  .then(data => {
    console.log('segunda consulta')

    console.log(data.dimension)
  })
  .catch (err => {console.error(err)});
