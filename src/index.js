const API = 'https://rickandmortyapi.com/api/character/';
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const fetchData = (url_api) => {
return new Promise((resolve, reject) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error', url_api))
          
      }
    });
    xhttp.send();
  });
}

fetchData(API) 
.then(data => {
  console.log('✅ Primer Llamado...');
  console.log('🗄  Personajes:' + ' ' + data.info.count);
  return fetchData(`${API}${data.results[0].id}`);
})

.then(data => {
  console.log('✅ Segundo Llamado...');
  console.log('😎 Primer Personaje:' + ' ' + data.name);
  return fetchData(data.origin.url);
})

.then(data => {
  console.log('✅ Tercero Llamado...');
  console.log('🗃  Dimensión:' + ' ' + data.dimension);
})
.catch(err => console.error(err))