import React, { useState } from "react";
import { Tarjeta } from "./Tarjeta";

export const App = () => {
  var [infoPokemon, setInfoPokemon] = useState(null);
  var [todosPokemons, settodosPokemons] = useState([]);

  // Buscar un Pokémon por nombre
  var fnBuscar = (e) => {
    var nombrePokemon = e.target.parentElement.querySelector("input").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
      .then((x) => x.json())
      .then((x) => {
        setInfoPokemon([x]); // Mostrar solo un Pokémon
        settodosPokemons([]); // Limpiar resultados anteriores
      })
      .catch(() => alert("Error: No se encontró el Pokémon"));
  };

  // Buscar todos los Pokémon
  var fnBuscarTodos = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((x) => x.json())
      .then((data) => {
        var promesas = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(promesas).then((listaPokemons) => {
          settodosPokemons(listaPokemons); // Mostrar lista de Pokémon
          setInfoPokemon(null); // Limpiar resultados anteriores
        });
      })
      .catch(() => alert("Error al obtener la lista de Pokémon"));
  };

  return (
    <div className="container mt-4">
        <h1 className="text-center text-primary mb-4">PokeApi </h1>
        <div className="d-flex justify-content-center mb-3">
            <label className="me-2">Nombre del Pokémon:</label>
            <input type="text" className="form-control w-25 me-2" />
            <button className="btn btn-primary me-2" onClick={fnBuscar}>Buscar</button>
            <button className="btn btn-success" onClick={fnBuscarTodos}>Mostrar Todos</button>
        </div>

        {/* Mostrar un Pokémon específico */}
        {infoPokemon && (
            <div className="row justify-content-center">
            {infoPokemon.map((pokemon, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <Tarjeta infoPokemon={pokemon} />
                </div>
            ))}
            </div>
        )}

        {/* Mostrar la lista de todos los Pokémon */}
            <div className="row mt-4">
            {todosPokemons && todosPokemons.map((pokemon, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <Tarjeta infoPokemon={pokemon} />
                </div>
            ))}
            </div>
    </div>
  );
};
