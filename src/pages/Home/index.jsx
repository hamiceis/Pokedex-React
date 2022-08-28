import { useContext } from "react";
import PokeCard from "../../components/PokeCard";
import { AuthContext } from "../../Providers/auth";
import { pokemonApi } from "../../services/pokemonApi";

export function Home() {
  
  const { search } = useContext(AuthContext); 
  
  const pokemonURL = `https://pokeapi.co/api/v2/pokemon/`;
  
  const { pokemons } = pokemonApi(pokemonURL);

  
  const filterPokemons =
    search.length > 0
      ? pokemons.filter((pokemon) => pokemon.name.includes(search))
      : [];

  return (
    <div className="">
      <h2 className="text-6xl text-cyan-900 text-center mt-8 mb-4">Pokemons</h2>
      <div className="flex flex-wrap justify-between p-8 m-auto max-w-[1200px]
                     ">
        
        {pokemons.length === 0 && <p>Carregando</p>}
        
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
