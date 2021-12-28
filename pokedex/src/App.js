import React from 'react';
import './App.css';
import Barre from "./components/Barre";
import Pokedex from './components/Pokedex';
import { getPokemons } from './api';

const {useState, useEffect} = React;

export default function App() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    } catch(err){}
  }

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div>
      <div className='App'>
        <Barre />
        <Pokedex pokemons={pokemons}/>
      </div>
    </div>
  );
}
