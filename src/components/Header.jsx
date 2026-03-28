import "../styles/Header.scss";
import logo from "../assets/images/kasa-logo-210.svg";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header container">
      <img src={logo} alt="Kasa Logo" className="header-logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <p> Accueil</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p> A Propos</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
