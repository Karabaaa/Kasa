import "../styles/Collapse.scss";
import ArrowUp from "../assets/images/arrow_up.svg";
import { useState } from "react";

export default function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((currentState) => !currentState);
  };

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        type="button"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span className="collapse-title">{title}</span>
        <img
          src={ArrowUp}
          alt=""
          aria-hidden="true"
          className={`collapse-arrow ${isOpen ? "collapsed" : ""}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <div className="collapse-content-inner">
          <div className="collapse-description">{description}</div>
        </div>
      </div>
    </div>
  );
}
