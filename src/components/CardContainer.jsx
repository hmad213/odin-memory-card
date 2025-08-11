import Card from "./card.jsx";
import "../styles/CardContainer.css"

export default function CardContainer({ pokemon }){
    let pokemonCopy = pokemon;
    for (let i = pokemonCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // pick a random index
        [pokemonCopy[i], pokemonCopy[j]] = [pokemonCopy[j], pokemonCopy[i]];   // swap elements
    }
    
    return(
        <div className="card-container">
            {pokemonCopy.map((entity) => 
                <Card url={entity.url} name={entity.name} key={entity.id}/>
            )}
        </div>
    )
}