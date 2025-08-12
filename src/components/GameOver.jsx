export default function GameOver({ restartGame }) {
  return (
    <>
      <h2>Game Over</h2>
      <button onClick={restartGame}>Play Again</button>
    </>
  );
}
