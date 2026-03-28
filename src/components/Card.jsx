import "../styles/Card.scss";
import { Link } from "react-router";

export default function Card({ title, cover, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      {cover ? (
        <img src={cover} alt={title} className="card-cover" />
      ) : (
        <div className="card-cover-placeholder"></div>
      )}
      <h2>{title}</h2>
    </Link>
  );
}
