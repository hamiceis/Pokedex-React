import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Pokemon } from './pages/Pokemon'

//Componente de rotas para paginas da Home e Pokemon

//Path da rota recebe um ID que vamos passar para ele quando o usuário selecionar o pokemon

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="pokemon/:id" element={<Pokemon />}/>
    </Routes>
  )
}