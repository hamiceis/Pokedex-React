import { useContext } from "react";
import PokeCard from "../../components/PokeCard";
import { AuthContext } from "../../Providers/auth";
import { pokemonApi } from "../../services/pokemonApi";

export function Home() {
  //utilizando o useContext para poder chamar pegar o valor no input digitado pelo usuário do componente navbar
  const { search } = useContext(AuthContext); 
  //colocando a URL da API dentro de uma const
  const pokemonURL = `https://pokeapi.co/api/v2/pokemon/`;
  //fazendo um destructuring da função para chamar todos os pokemons da api, que recebe como parametro a URL
  const { pokemons } = pokemonApi(pokemonURL);

  //Ternário para filtrar os pokemons que o usuário vai digitar 
  const filterPokemons =
    search.length > 0
      ? pokemons.filter((pokemon) => pokemon.name.includes(search))
      : [];

  return (
    <div className="">
      <h2 className="text-6xl text-cyan-900 text-center mt-8 mb-4">Pokemons</h2>
      <div className="flex flex-wrap justify-between p-8 m-auto max-w-[1200px]">
        {/*Lógica para carregamento tela, enquanto o chama as info da API */}
        {pokemons.length === 0 && <p>Carregando</p>}
        {/*Lógica para caso o usuário digite um valor na barra de pesquisa, ele vai filtrar os pokemons, caso contrario ele vai apenas carregar os pokemons */}
        {search.length > 0
          ? filterPokemons.map((pokemon, id) => (
              <PokeCard key={id} pokemon={pokemon} />
            ))
          : pokemons.map((pokemon, id) => (
              <PokeCard key={id} pokemon={pokemon} />
            ))}
      </div>
    </div>
  );
}
