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
          <div>
            <Link to="/moves">Moves</Link>
          </div>
          <div>
            <Link to="/types">Types</Link>
          </div>
          <div>
            <Link to="/species">Species</Link>
          </div>
          <div>
            <Link to="/items">Items</Link>
          </div>
        </div>
      </header>
    </nav>
  );
};
