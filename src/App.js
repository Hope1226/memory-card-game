import './App.css';
import React, { useState, useEffect } from 'react';
import Data from './components/data';
import Header from './components/Header';
import Pokes from './components/Pokes';

function App() {

  const [marvelHeros, setmarvelHeros] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    populateList()
    console.log(marvelHeros)
  }, []);

  const populateList = () => {
    setmarvelHeros(
     Data
    );
  };

  return (
    <div className="App">
      <Header />
      <Pokes list={marvelHeros} />     
    </div>
  );
}

export default App;
