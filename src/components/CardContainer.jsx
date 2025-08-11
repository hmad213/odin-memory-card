import Card from "./card.jsx";
import "../styles/CardContainer.css"

export default function CardContainer({ pokemon, selectedPokemon, setSelectedPokemon, setGameOver }){
    let pokemonCopy = pokemon;
    for (let i = pokemonCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pokemonCopy[i], pokemonCopy[j]] = [pokemonCopy[j], pokemonCopy[i]]; 
    }

    return(
        <div className="card-container">
            {pokemonCopy.map((entity, index) => 
                <Card url={entity.url} name={entity.name} myKey={entity.id} key={index} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} setGameOver={setGameOver}/>
            )}
        </div>
    )
}