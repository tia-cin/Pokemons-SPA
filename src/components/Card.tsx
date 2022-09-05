import "./styles/Card.css";
import pokeball from "../assets/pokeball-btn.png";
import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../redux/types";

interface CardProps {
  pokemon: Pokemon;
  firstLetterUpperCase: (word: string) => string;
  colors: { [key: string]: any };
}

export const Card: React.FC<CardProps> = ({
  pokemon,
  firstLetterUpperCase,
  colors,
}) => {
  return (
    <div className="card">
      <div className="image">
        <img src={pokemon.sprites.front_default} alt="pokemon-back" />
      </div>
      <div className="name">
        <h3>{pokemon.name.toLocaleUpperCase()}</h3>
      </div>
      <div className="type">
        {pokemon.types.map((t, i) => (
          <p key={i} style={{ backgroundColor: `${colors[t.type.name]}` }}>
            {firstLetterUpperCase(t.type.name)}
          </p>
        ))}
      </div>
      <div className="button">
        <Link to={`/pokemon/${pokemon.id}`}>
          <div>
            <button className="btn-catch">Catch It!</button>
            <div>
              <img src={pokeball} alt="pokeball" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
