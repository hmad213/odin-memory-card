import "../styles/Card.css";

export default function Card({
  url,
  name,
  myKey,
  selectedPokemon,
  setSelectedPokemon,
  setGameOver,
}) {
  function onClick() {
    if (selectedPokemon.indexOf(myKey) === -1) {
      setSelectedPokemon([...selectedPokemon, myKey]);
    } else {
      setGameOver(true);
      setSelectedPokemon([]);
    }
  }

  return (
    <div className="card" onClick={onClick}>
      <img src={url} alt="" />
      <h2>{String(name).charAt(0).toUpperCase() + String(name).slice(1)}</h2>
    </div>
  );
}
