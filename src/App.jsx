
import { Navbar } from "./components/Navbar";
import { Router } from "./routes";

function App() {

//Componente principal App que possui componente Navbar e as routas do componente routes;
  return (
    <div>
      <Navbar />
      
      <Router />
    </div>
  )
}

export default App;
