import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  data: any;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <section>
      <Link to={`/pokemon/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
    </section>
  );
};
