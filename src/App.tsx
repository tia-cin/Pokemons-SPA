import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pages/Pokemons";
import { Landing } from "./components/Pages/Landing";
import { Navbar } from "./components/Navbar";
import { Moves } from "./components/Pages/Moves";
import { Types } from "./components/Pages/Types";
import { Items } from "./components/Pages/Items";
import { Detail } from "./components/Pages/Detail";
import { Species } from "./components/Pages/Species";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/moves" element={<Moves />} />
          <Route path="/types" element={<Types />} />
          <Route path="/items" element={<Items />} />
          <Route path="/species" element={<Species />} />
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
