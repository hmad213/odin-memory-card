import "../styles/Header.css";

export default function Header({ score, highScore, difficulty }) {
  return (
    <header>
      <h1>Memory Card</h1>
      <div>
        {difficulty ? (
          <>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
