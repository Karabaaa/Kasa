import "../styles/NotFound.scss";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">
        <p className="link">Retourner sur la page d’accueil</p>
      </Link>
    </section>
  );
}
