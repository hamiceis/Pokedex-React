import { useContext } from "react";
import PokeCard from "../../components/PokeCard";
import { AuthContext } from "../../Providers/auth";
import { pokemonApi } from "../../services/pokemonApi";

export function Home() {
  //ContextAPI do input do componente Navbar
  const { search } = useContext(AuthContext); 
  //URL da API pokemonAPI
  const pokemonURL = `https://pokeapi.co/api/v2/pokemon/`;
  //Destructuring para pegar o Array de objetos de todos os pokemons que vai ser gerado da função que foi criada
  const { pokemons } = pokemonApi(pokemonURL);

  //Logica para filtrar o pokemon, para saber se ele está includo no Array, caso contrário retorna um Array vazio  
  const filterPokemons =
    search.length > 0
      ? pokemons.filter((pokemon) => pokemon.name.includes(search))
      : [];

  return (
    <div className="">
      <h2 className="text-6xl text-cyan-900 text-center mt-8 mb-4">Pokemons</h2>
      <div className="flex flex-wrap justify-between p-8 m-auto max-w-[1200px]
                     ">
        {/*Paragrafo para ser exibindo como tela carregamento */}
        {pokemons.length === 0 && <p>Carregando</p>}
        {/* Ternário para se o usuário digitar algo no input ser filtrado o nome do pokemon, caso contrario apenas mostre todos os pokemons*/}
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
