import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { Tarjeta } from "./Tarjeta";

export const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);

  const fetchPokemon = (name) => {
    setError(false);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokémon no encontrado");
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        setError(true);
        setPokemon(null);
      });
  };

  return (
    <div className="container my-5">
      <h1
        className="text-center mb-4"
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#ff6f61",
          textShadow: "2px 2px #ffd700",
        }}
      >
        Pokedex React
      </h1>
      <Formulario onSearch={fetchPokemon} />
      {error ? (
        <Tarjeta pokemon={null} />
      ) : (
        pokemon && <Tarjeta pokemon={pokemon} />
      )}
    </div>
  );
};
