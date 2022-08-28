import Logo from "../../assets/imgs/pokelogo.webp";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Providers/auth";

export function Navbar() {
  //contextAPI para que possamos passar props e valores search, navbar para esconder e mostrar o input do form 
  const { search, setSearch, navbar, setNavbar } = useContext(AuthContext);

  //Ternário que vai mostrar ou esconder o form
  const searchMenu = navbar ? `flex` : "invisible";

  //função para resetar o form e mostrar visivel novamente
  function reset() {
    setNavbar(true);
    setSearch("");
  }

  return (
    <nav className="py-4 px-8 bg-sky-800 flex justify-center items-center">
      <Link to="/" onClick={reset}>
        <img className="w-1/5 sm:w-3/5" src={Logo} alt="Logo Pokemon" />
      </Link>

      <form className={`${searchMenu} gap-2 `}>
        <input
          className="py-1 px-3 rounded outline-none"
          type="text"
          placeholder="Busque um Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 text-md bg-sky-800 rounded-md border-solid border-black border-2 text-zinc-900 flex items-center cursor-pointer transition-colors hover:bg-cyan-400"
          type="submit"
        >
          <BiSearch />
        </button>
      </form>
    </nav>
  );
}
