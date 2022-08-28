
import { Navbar } from "./components/Navbar";
import { Router } from "./routes";

//App possui o navbar e componentes de rotas para poder funcionar na aplicação

function App() {

  return (
    <div>
      <Navbar />
      
      <Router />
    </div>
  )
}

export default App;
