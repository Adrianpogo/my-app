import React, { useState } from "react";

export const Formulario = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemonName.trim()) {
      onSearch(pokemonName.trim().toLowerCase());
      setPokemonName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group shadow">
        <input
          type="text"
          className="form-control"
          placeholder="¡Busca tu Pokémon favorito!"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          style={{
            fontSize: "1.2rem",
            borderRadius: "10px 0 0 10px",
          }}
        />
        <button
          type="submit"
          className="btn btn-warning"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            borderRadius: "0 10px 10px 0",
          }}
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
