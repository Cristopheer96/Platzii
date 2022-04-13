let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); // true es para que sea asincrona

    xhttp.onreadystatechange = ( () => {
      if(xhttp.readyState === 4){
        (xhttp.status === 200)
        ? resolve(JSON.parse(xhttp.responseText))
        : reject(new Error('error ', url_api))
      }
    });
    xhttp.send();

  })

}
module.exports = fetchData;
