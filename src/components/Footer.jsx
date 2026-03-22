import "../styles/Footer.scss";
import logo from "../assets/kasa-logo-white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Kasa Logo" className="footer-logo" />
        <p>&copy; 2020 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
}
