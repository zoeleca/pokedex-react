import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/style.css';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokemonQuizPage from './pages/PokemonQuizPage';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/pokedex' element={<PokedexPage/>} />
        <Route path='/pokemon-quiz' element={<PokemonQuizPage/>} />
        <Route exact path='/' element={<HomePage/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App