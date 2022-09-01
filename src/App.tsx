import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pages/Pokemons";
import { Landing } from "./components/Pages/Landing";
import { Navbar } from "./components/Navbar";
import { Moves } from "./components/Moves";
import { Types } from "./components/Types";
import { Items } from "./components/Items";
import { Detail } from "./components/Detail";
import { Species } from "./components/Species";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
