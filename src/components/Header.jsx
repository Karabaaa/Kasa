import "../styles/Header.scss";
import logo from "../assets/kasa-logo-210.svg";

export default function Header() {
  return (
    <header className="header container">
      <img src={logo} alt="Kasa Logo" className="header-logo" />
      <nav>
        <ul>
          <li>
            <a href="/">
              <p> Accueil</p>
            </a>
          </li>
          <li>
            <a href="/about">
              <p> A Propos</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
