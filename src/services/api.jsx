import axios from 'axios'
//URL base para chamar, quando utilizar a api pokemon

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

export default api;