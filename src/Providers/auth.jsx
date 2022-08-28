import { useState, createContext } from "react";

export const AuthContext = createContext({})

//ContextAPI para poder passar entre componentes informações sobre, quando o usuário digitar algo no input
//Quando o usuário colocar em detalhar o pokemon, o navbar ficar invísivel 

export function AuthProvider ({children}){
const [search, setSearch] = useState([]);
const [navbar, setNavbar] = useState(true)

  return (
    <AuthContext.Provider value={{search, setSearch, navbar, setNavbar}}>
      {children}
    </AuthContext.Provider>
  )
}

//Hook customizado, ao invés de utilizar const [ ] = useContext(AuthContext)
// export const useAuth = () => useContext(AuthContext)