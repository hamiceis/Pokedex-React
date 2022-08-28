import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/auth";
import { useFetch } from "../../services/useFetch";

export function Pokemon() {

  const { setNavbar, navbar } = useContext(AuthContext);
  const { id } = useParams();
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const type = (types) => types?.[0].type.name;
  const ability = (abilities) => abilities?.[0].ability.name;

  useEffect(() => {
    setNavbar(!navbar);
  }, [id]);

  return (
    <div
      className={`bg-zinc-900 bg-cover py-5 w-full h-[100vh] flex flex-col items-center `}
    >
      <div className="flex flex-col flex-wrap w-2/5 max-h-[800px] border-white border-2 sm:w-4/5" >
        <div className="flex justify-between items-center text-white">
          <p className="py-2 px-5 border-white  border-b-2 border-r-2 text-2xl font-medium">
            {`Nº${data.id ?? <p>Carregando</p>}`}
          </p>
          <h3 className="px-2 py-2 w-full border-white border-b-2 text-center text-2xl font-bold">
            {`${data.name?.[0].toUpperCase()}${data.name?.substring(1) ?? <p>Carregando</p>}`}
          </h3>
        </div>

        <div className="flex justify-center border-white border-b-2">
          <img
            className="h-96 py-4"
            src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
            alt={data.name}
          />
        </div>

        <div className="flex flex-col flex-wrap justify-between items-start text-white px-4 py-2 w-full h-20 ">
          <p className="font-bold text-lg">
            Height:
            <span className="text-green-600 ml-2 text-xl">
              {`${(data.height * 10) / 100}m` ?? `Carregando`}
            </span>
          </p>

          <p className="font-bold text-lg">
            Weight:{" "}
            <span className="text-green-600 ml-2 text-xl">
              {`${data.weight / 10}Kg` ?? `Carregando`}
            </span>
          </p>

          <p className="font-bold text-lg">
            Category:{" "}
            <span className="text-green-600 ml-2 text-xl">
              {type(data.types)?.toUpperCase() ?? `Carregando`}
            </span>
          </p>

          <p className="font-bold text-lg">
            Abilities:{" "}
            <span className="text-green-600 ml-2 text-xl">
              {ability(data.abilities)?.toUpperCase() ?? `Carregando`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
