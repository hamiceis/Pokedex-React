import { Link } from "react-router-dom";

export default function PokeCard({ pokemon, showLink = true }) {

  const namesUppercase = (str) => {
    const palavra = str.split(" ");

    const palavraTrans = palavra
      .map((p) => {
        return p[0].toUpperCase() + p.substring(1);
      })
      .join(" ");

    return palavraTrans;
  };
  
  const type = (array) => array.map((p) => p.type.name).join(" | ");

  return (
    <div
      className={`flex flex-col p-2 shadow-xl shadow-gray-900 justify-between mb-10 bg-gradient-to-tr ${pokemon.types[0].type.name} transition duration-200 ease-linear hover:-translate-y-2.5 text-zinc-900 w-[30%] border-2 border-black sm:w-[47%] `}
    >
      <img
        className="p-2 mb-4"
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />

      <h2 className="text-center text-2xl p-2 mb-4 border-y-2 border-black">
        {pokemon.id} - {namesUppercase(pokemon.name)}
      </h2>

      <p className="text-center text-2xl p-2 mb-4 border-black border-b-2">
        {namesUppercase(type(pokemon.types))}
      </p>

      
      {showLink && (
        <Link
          className="text-center text-2xl p-2 m-2 bg-zinc-50 transition-colors  border-black border-2 rounded-full hover:bg-transparent "
          to={`/pokemon/${pokemon.id}`}
        >
          Detalhes
        </Link>
      )}
    </div>
  );
}
