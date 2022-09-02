import "./styles/SearchBar.css";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../redux/actions/actions";

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch<any>(searchPokemons(input));
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Seach"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};
