import axios from "axios"
import { useState, useEffect } from "react"

//função para chamar da API, todos os pokemons e resolver para colocar dentro de um Array de promise;

export function pokemonApi(url){

const [pokemons, setPokemons] = useState([])

const pokemonURL = index  => `${url}${index}`

useEffect(() => {
  async function gererarPokemonsPromise() {

  const generatePokemons = Array(150).fill("").map((_, index) => 
  axios.get(pokemonURL(index + 1)).then(response => response.data)
  )
  
  const pokemonsPromise = await Promise.all(generatePokemons)
  setPokemons(pokemonsPromise)
  }

  gererarPokemonsPromise()

}, [url])
  return {pokemons}
}