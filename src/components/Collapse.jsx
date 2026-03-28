import "../styles/Collapse.scss";
import ArrowUp from "../assets/images/arrow_up.svg";
import { useState } from "react";

export default function Collapse({ title, description }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <img
          src={ArrowUp}
          alt="dropdown"
          className={`collapse-arrow ${isCollapsed ? "collapsed" : ""}`}
        />
      </div>
      {isCollapsed && (
        <div className="collapse-content">
          <p className="collapse-description">{description}</p>
        </div>
      )}
    </div>
  );
}
