import React from "react";
import { Item, Move, Pokemon, Species, Type } from "../redux/types";
import { Card } from "./Card/Card";

interface ContainerProps {
  content: any;
}
export const Container: React.FC<ContainerProps> = ({ content }) => {
  console.log(content);

  return (
    <div>
      {content.map((p: any, i: number) => (
        <Card key={i} data={p} />
      ))}
    </div>
  );
};
