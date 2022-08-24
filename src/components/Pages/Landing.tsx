import React from "react";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  return (
    <div>
      <h1>Pokemon Guide</h1>
      <p>Discover the Pokemon World</p>
      <Link to="/pokemons">
        <button>Go</button>
      </Link>
    </div>
  );
};
