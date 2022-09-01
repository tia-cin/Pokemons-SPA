import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <header>
        <div>logo</div>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/pokemons">Pokemons</Link>
          </div>
        </div>
      </header>
    </nav>
  );
};
