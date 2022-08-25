import React from "react";
import { Link } from "react-router-dom";
import { Move, Pokemon } from "../redux/types";

interface CardProps {
  data: any;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const pokemon: Pokemon = {
    name: data.name,
    weight: data.weight,
    height: data.height,
    baseExperience: data.baseExperience,
    id: data.id,
    abilities: data.abilities,
    sprites: {
      back_default: data.sprites.back_default,
      front_default: data.sprites.front_default,
      versions: {
        ["generation-v"]: {
          ["black-white"]: {
            animated: {
              back_default:
                data.sprites.versions["generation-v"]["black-white"].animated
                  .back_default,
              front_default:
                data.sprites.versions["generation-v"]["black-white"].animated
                  .front_default,
            },
          },
        },
      },
    },
  };

  return (
    <section>
      <div>
        <img src={pokemon.sprites.back_default} alt="" />
      </div>
      <div>
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <Link to={`/pokemon/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
    </section>
  );
};
