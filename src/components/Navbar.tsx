import "./styles/Navbar.css";
import logo from "../assets/pokeball.png";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="container">
      <div className="item image-container">
        <img src={logo} alt="pokeball-logo" id="pokeball-logo" />
      </div>
      <div className="item container">
        <div className="item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <Link to="/pokemons">Pokemons</Link>
        </div>
      </div>
    </nav>
  );
};
