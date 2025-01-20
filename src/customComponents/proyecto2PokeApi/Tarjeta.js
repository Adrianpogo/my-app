import React from "react";
import { useState } from "react";

export const Tarjeta = ({ infoPokemon }) => {
  var { name, sprites, stats } = infoPokemon;
  const [hover, setHover] = useState(false);

  return (
    <div className="card text-center shadow-sm bg-primary-subtle  p-3">
        <h5 className="card-title text-capitalize mt-2">{name}</h5>
        <img
            src={hover ? sprites.back_default : sprites.front_default}
            className="card-img-top img-fluid p-3 border border-3 bg-light rounded-circle"
            alt={name}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        />
        <div className="card-body rounded-5">
        
            <h6>Estadísticas</h6>
            <ul className="list-group list-group-flush mt-3 rounded-5">
            {stats.map((stat, index) => (
                <li key={index} className="list-group-item">
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
};
