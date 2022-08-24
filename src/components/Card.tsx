import React from "react";

interface CardProps {
  data: any;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <section>
      <h3>{data.name}</h3>
    </section>
  );
};
