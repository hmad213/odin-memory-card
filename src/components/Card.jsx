import "../styles/Card.css"

export default function Card({ url, name }) {
  return (
    <div className="card">
      <img src={url} alt="" />
      <h2>{String(name).charAt(0).toUpperCase() + String(name).slice(1)}</h2>
    </div>
  );
}
