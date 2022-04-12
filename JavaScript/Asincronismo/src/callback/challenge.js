// permite hace peticiones, esto se usaba antes de  que existiria fetch, no utilizamos fetch ya que fetch incluye promesas y al momento no hemos visto este tema
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api,callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true); // true es para que sea asincrona
  // xhttp.onreadyst atechange = function(event) {
  //   if (xhttp.readyState == 4 && xhttp.status == 200) {
  //             callback(null, JSON.parse(xhttp.responseText));

  //     callback(null,JSON.parse(xhttp.responseText)); // nuestra funcion callback tiene un estandar que el primer argumento sera el error en caso haya y el segundo es la informacion recibida
  //   }
  //   else{
  //     callback(Error('error ----tuvo-- de la url'), null)
  //   }
  // }
  //por ultimo enviamos la peticion
  xhttp.onreadystatechange = (event) => {
    // el state 4 es el ultimo de la peticion
    if(xhttp.readyState === 4){
      // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
      if(xhttp.status === 200){
        // el primer valor es el err, y el siguiente el resultado
        // ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // si no es 200
        let error = new Error('Error: ' + url_api);
        // matamos el proceso con un error
        return callback(error, null);
      }
    }
  }
  // por ultimo enviamos la peticion
  xhttp.send();
}

fetchData(API,function(error1,data1){
  if (error1) return console.error(error1)
  fetchData(API+data1.results[0].id,function(error2,data2){
    if (error2) return console.error(error2)
    fetchData(data2.origin.url, function(error3,data3){
      if (error3) return console.error(error3)
      console.log(data1.info.count)
      console.log (data2.name)
      console.log (data3.dimension)
    })
  })
})
