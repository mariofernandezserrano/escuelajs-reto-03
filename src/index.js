const fetchData = require('./utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';


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