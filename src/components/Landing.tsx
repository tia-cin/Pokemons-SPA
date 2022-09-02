import "./styles/Landing.css";
import image from "../assets/pokemon.png";
import React from "react";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  return (
    <div className="page-container flex-row jc-sb" id="landing">
      <div className="item text-container">
        <h1 className="big-titles">Pokemon Guide</h1>
        <p className="descriptions">Discover the Pokemon World</p>
        <Link to="/pokemons" className="links">
          <button className="buttons">Go</button>
        </Link>
      </div>
      <div className="item">
        <img src={image} alt="ash-and-pikachu" id="ash-and-pikachu" />
      </div>
    </div>
  );
};
