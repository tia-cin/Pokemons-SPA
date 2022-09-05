import "./styles/Card.css";
import pokeball from "../assets/pokeball-btn.png";
import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../redux/types";

interface CardProps {
  pokemon: Pokemon;
  firstLetterUpperCase: (word: string) => string;
}

export const Card: React.FC<CardProps> = ({
  pokemon,
  firstLetterUpperCase,
}) => {
  const typesColors: { [key: string]: any } = {
    bug: "#94bc4a",
    dark: "#736c75",
    dragon: "#6a7baf",
    electric: "#e5c531",
    fairy: "#e397d1",
    fighting: "#cb5f48",
    fire: "#ea7a3c",
    flying: "#7da6de",
    ghost: "#846ab6",
    grass: "#71c558",
    ground: "#cc9f4f",
    ice: "#70cbd4",
    normal: "#aab09f",
    poison: "#b468b7",
    psychic: "#e5709b",
    rock: "#b2a061",
    steel: "#89a1b0",
    water: "#539ae2",
  };

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
          <p key={i} style={{ backgroundColor: `${typesColors[t.type.name]}` }}>
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
