import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Pokes from './components/Pokes';

function App() {

  const [pokeList, setPokeList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(()=> {
    fetchApi();

  }, [])

  const fetchApi = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();

    console.log(data)
  }

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
