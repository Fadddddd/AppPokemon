import React, { useEffect, useState } from "react";
import PokemonThumbnails from "./components/PokemonThumbnails";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    //same as ComponentDidMount
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats, index) => (
            <PokemonThumbnails
              id={pokemonStats.id}
              name={pokemonStats.name}
              image={pokemonStats.sprites.other.dream_world.front_default}
              type={pokemonStats.types[0].type.name}
              key={index}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
