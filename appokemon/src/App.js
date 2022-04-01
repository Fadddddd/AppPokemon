import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <h1>Moi c'est Fad donc rien à voir ac Pokemon</h1>
    </div>
  );
};

export default App;
