import React from "react";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  return (
    <div>
      Welcome to Pokemos Page <Link to="/home">go</Link>
    </div>
  );
};
