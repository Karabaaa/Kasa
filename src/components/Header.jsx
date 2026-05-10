import "../styles/Header.scss";
import logo from "../assets/images/kasa-logo-210.svg";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header container">
      <img src={logo} alt="Kasa Logo" className="header-logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              <p> Accueil</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <p> A Propos</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
