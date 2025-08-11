import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer.jsx";
import "./App.css";
import DifficultySelector from "./components/DifficultySelector.jsx";

async function getRandomPokemon(total) {
  const pokemon = [];

  while (pokemon.length < total) {
    const randNum = Math.floor(Math.random() * 1025) + 1;

    if (pokemon.some(p => p.id === randNum)) {
      continue;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`);
    const data = await response.json();

    pokemon.push({
      id: data.id,
      name: data.name,
      url: data.sprites.front_default
    });
  }

  return pokemon;
}

function App() {
  let [pokemon, setPokemon] = useState(null);
  let [difficulty, setDifficulty] = useState(null);
  let [selectedPokemon, setSelectedPokemon] = useState([]);
  let [gameOver, setGameOver] = useState(false);

  let score = selectedPokemon.length;
  if(pokemon && score >= pokemon.length){
    setGameOver(true);
    setSelectedPokemon([]);
  }
  
  console.log(selectedPokemon);

  useEffect(() => {
    async function fetchPokemon() {
      setPokemon([
    {
        "name": "bidoof",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
        "id": 399
    },
    {
        "name": "mudsdale",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
        "id": 750
    },
    {
        "name": "tapu-bulu",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
        "id": 787
    },
    {
        "name": "binacle",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
        "id": 688
    },
    {
        "name": "zebstrika",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
        "id": 523
    },
    {
        "name": "phanpy",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
        "id": 231
    },
    {
        "name": "toxel",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
        "id": 848
    },
    {
        "name": "drowzee",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        "id": 96
    },
    {
        "name": "quaquaval",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
        "id": 914
    },
    {
        "name": "hippowdon",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
        "id": 450
    }
]);
    }

    fetchPokemon();
  }, []);

  return (
    <>
      <h1>PokeCard</h1>
      <h2>Score: {score}</h2>
      {!difficulty ? <DifficultySelector setDifficulty={setDifficulty}/> : (pokemon ? (
        <CardContainer pokemon={pokemon} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} setGameOver={setGameOver}/>
      ) : (
        <p>Loading...</p>
      ))}
    </>
  );
}

export default App;
