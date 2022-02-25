import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__titleContainer">
        <h1 className="header__title"> Run Length Encoder </h1>
      </div>
      <div className="header__navbar">
        <Link to="/encode">
          <div className="header__item">
            <span className="header__itemText"> Encode </span>
          </div>
        </Link>
        <Link to="/decode">
          <div className="header__item">
            <span className="header__itemText"> Decode </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
