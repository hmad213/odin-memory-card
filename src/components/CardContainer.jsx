import Card from "./card.jsx";
import "../styles/CardContainer.css";
import { useMemo } from "react";

function shuffleArray(arr) {
  let copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function CardContainer({
  pokemon,
  selectedPokemon,
  setSelectedPokemon,
  setGameOver,
}) {
  let pokemonCopy = useMemo(() => {
    return shuffleArray(pokemon);
  }, [selectedPokemon]);

  return (
    <div className="card-container">
      {pokemonCopy.map((entity) => (
        <Card
          url={entity.url}
          name={entity.name}
          myKey={entity.id}
          key={entity.id}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          setGameOver={setGameOver}
        />
      ))}
    </div>
  );
}
