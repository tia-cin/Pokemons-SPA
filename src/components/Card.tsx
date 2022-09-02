import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../redux/types";

interface CardProps {
  pokemon: Pokemon;
}

export const Card: React.FC<CardProps> = ({ pokemon }) => {
  // first letter uppercase
  const firstLetterUpperCase = (word: string) =>
    word.charAt(0).toLocaleUpperCase() + word.slice(1);

  return (
    <div>
      <div>
        <div>
          <img
            src={pokemon.sprites.front_default}
            className="pokemon-image"
            alt="pokemon-back"
          />
        </div>
      </div>
      <div>
        <h3>{pokemon.name.toLocaleUpperCase()}</h3>
        <div>
          {pokemon.types.map((t, i) => (
            <p key={i}>{firstLetterUpperCase(t.type.name)}</p>
          ))}
        </div>
      </div>
      <div>
        <Link to={`/pokemon/${pokemon.id}`}>
          <button className="btn-catch">Catch It!</button>
        </Link>
      </div>
    </div>
  );
};
