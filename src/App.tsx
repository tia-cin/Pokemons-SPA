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

  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/pokemons"
              element={<Pokemons firstLetterUpperCase={firstLetterUpperCase} />}
            />
            <Route
              path="/pokemon/:id"
              element={<Detail firstLetterUpperCase={firstLetterUpperCase} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
