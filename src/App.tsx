import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pokemons";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { Detail } from "./components/Detail";

export const App: React.FC = () => {
  const firstLetterUpperCase = (word: string) =>
    word.charAt(0).toLocaleUpperCase() + word.slice(1);

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
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/pokemons"
              element={
                <Pokemons
                  firstLetterUpperCase={firstLetterUpperCase}
                  colors={typesColors}
                />
              }
            />
            <Route
              path="/pokemon/:id"
              element={
                <Detail
                  firstLetterUpperCase={firstLetterUpperCase}
                  colors={typesColors}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
