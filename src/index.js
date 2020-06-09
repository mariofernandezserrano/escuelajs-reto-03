var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status == 200){
        callback(null, JSON.parse(xhttp.responseText));
      }else{
      const error = new Error ('Error' + url_api);
      return callback(url_api);
      }
    }
  };
  xhttp.send();
};

fetchData(API, function (error1, data1) {
  if (error1) return console.error('Error' + ' ' + error1);
  console.log('✅ Primer Llamado...')
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    console.log('✅ Segundo Llamado...')
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log('✅ Tercero Llamado...')
      console.log('🗄  Personajes:' + ' ' + data1.info.count);
      console.log('😎 Primer Personaje:' + ' ' + data2.name);
      console.log('🗃  Dimensión:' + ' ' + data3.dimension);
    });
  });
});