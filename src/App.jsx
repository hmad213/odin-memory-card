import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer.jsx";
import Header from "./components/Header.jsx";
import "./App.css";
import DifficultySelector from "./components/DifficultySelector.jsx";
import GameOver from "./components/GameOver.jsx";

async function getRandomPokemon(total) {
  const pokemon = [];

  while (pokemon.length < total) {
    const randNum = Math.floor(Math.random() * 1025) + 1;

    if (pokemon.some((p) => p.id === randNum)) {
      continue;
    }

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randNum}`,
    );
    const data = await response.json();

    pokemon.push({
      id: data.id,
      name: data.species.name,
      url: data.sprites.front_default,
    });
  }

  return pokemon;
}

function App() {
  let [pokemon, setPokemon] = useState(null);
  let [difficulty, setDifficulty] = useState(null);
  let [selectedPokemon, setSelectedPokemon] = useState([]);
  let [gameOver, setGameOver] = useState(false);
  let [highScore, setHighScore] = useState(0);

  const levels = { easy: 6, medium: 9, hard: 12 };

  let score = selectedPokemon.length;

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  useEffect(() => {
    if (pokemon && score >= pokemon.length) {
      setGameOver(true);
    }
  }, [pokemon, score]);

  useEffect(() => {
    async function fetchPokemon() {
      if (
        difficulty == "easy" ||
        difficulty == "medium" ||
        difficulty == "hard"
      ) {
        const data = await getRandomPokemon(levels[difficulty]);
        setPokemon(data);
      }
    }

    fetchPokemon();
  }, [difficulty]);

  function restartGame() {
    setDifficulty(null);
    setGameOver(false);
    setPokemon(null);
    setSelectedPokemon([]);
  }

  return (
    <>
      <Header score={score} highScore={highScore} difficulty={difficulty} />
      <main>
        {gameOver ? (
          <GameOver restartGame={restartGame} text={score >= pokemon.length ? "You Win!" : "Game Over!"}/>
        ) : !difficulty ? (
          <DifficultySelector setDifficulty={setDifficulty} />
        ) : pokemon ? (
          <CardContainer
            pokemon={pokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            setGameOver={setGameOver}
          />
        ) : (
          <div class="loader"></div>
        )}
      </main>
    </>
  );
}

export default App;
