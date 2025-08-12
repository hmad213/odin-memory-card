import "../styles/GameOver.css"

export default function GameOver({ restartGame, text }) {
  return (
    <div className="game-over">
      <h2>{text}</h2>
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
}
