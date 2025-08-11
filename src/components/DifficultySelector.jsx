import "../styles/DifficultySelector.css";

export default function DifficultySelector({ setDifficulty }) {
  function onClick(e) {
    console.log(e.target.textContent.toLowerCase());
    setDifficulty(e.target.textContent.toLowerCase());
  }

  return (
    <div className="difficulty-selector">
      <h2>Select Your Difficulty</h2>
      <div className="difficulty-container">
        <button className="easy" onClick={onClick}>
          Easy
        </button>
        <button className="medium" onClick={onClick}>
          Medium
        </button>
        <button className="hard" onClick={onClick}>
          Hard
        </button>
      </div>
    </div>
  );
}
