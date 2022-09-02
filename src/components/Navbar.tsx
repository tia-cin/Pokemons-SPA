import "./styles/Navbar.css";
import logo from "../assets/pokeball.png";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex-row jc-sb">
      <div className="item image-container">
        <Link to="/">
          <img src={logo} alt="pokeball-logo" id="pokeball-logo" />
        </Link>
      </div>
      <div className="item flex-row">
        <div className="item ">
          <Link to="/pokemons" className="links">
            Pokemons
          </Link>
        </div>
        <div className="item ">
          <Link to="/about" className="links">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
