import React, { useState } from "react";

export const Tarjeta = ({ pokemon }) => {
  const [hover, setHover] = useState(false);

  if (!pokemon) {
    return (
      <div
        className="alert alert-danger text-center"
        role="alert"
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        😢 Pokémon no encontrado. ¡Intenta con otro nombre!
      </div>
    );
  }

  const { name, sprites, stats } = pokemon;

  return (
    <div
      className="card shadow-lg mx-auto"
      style={{
        width: "22rem",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
      }}
    >
      <img
        src={hover ? sprites.back_default : sprites.front_default}
        className="card-img-top"
        alt={name}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: "#ffcb05",
          padding: "1rem",
        }}
      />
      <div className="card-body text-center">
        <h5
          className="card-title text-capitalize mb-3"
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ff6f61" }}
        >
          {name}
        </h5>
        <ul className="list-group list-group-flush">
          {stats.map((stat) => (
            <li
              key={stat.stat.name}
              className="list-group-item"
              style={{
                backgroundColor: "#f1f1f1",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
