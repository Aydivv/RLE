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
        <div className="header__item">
          <Link to="/encode">
            <span className="header__itemText"> Encode </span>
          </Link>
        </div>

        <div className="header__item">
          <Link to="/decode">
            <span className="header__itemText"> Decode </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
