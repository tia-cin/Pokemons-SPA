import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../redux/types";

interface CardProps {
  data: Pokemon;
}

export const PokemonCard: React.FC<CardProps> = ({ data }) => {
  const pathFront =
    data.sprites.versions["generation-v"]["black-white"].animated
      .front_default || data.sprites.front_default;

  const pathBack =
    data.sprites.versions["generation-v"]["black-white"].animated
      .back_default || data.sprites.back_default;
  return (
    <section>
      <div>
        <img src={pathFront} alt="" />
      </div>
      <div>
        <img src={pathBack} alt="" />
      </div>
      <Link to={`/pokemon/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
    </section>
  );
};
