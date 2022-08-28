import axios from 'axios'

//Base inicial da URL do pokemon 
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

export default api;