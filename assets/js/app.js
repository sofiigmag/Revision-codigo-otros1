
/* Este código consume la API GitHub para desplegar información de un usuario*/

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/* cambié el nombre de las variables para que sean más fáciles de entender y eliminé
el punto y el #  */
const name = document.querySelector('.name');
const blog = document.querySelector('#blog');
const userLocation = document.querySelector('.location');

/* Agregué  el async para que la función displayUser sea asíncrona y funcione
con la función await */
const displayUser = async (username) => {
  name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  name.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  userLocation.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);