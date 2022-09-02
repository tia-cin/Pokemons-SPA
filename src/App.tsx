import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pokemons";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { Detail } from "./components/Detail";

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/pokemon/:id" element={<Detail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
