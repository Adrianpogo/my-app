import React from "react";
import { useState, useEffect } from "react";

export const FormularioQuizz = ({ numPreguntas, setNumPreguntas, categoria, setCategoria, formato, setFormato, fetchPreguntas }) => {
    return (
        <div className="container">
          <label className="form-label">
            Número de Preguntas
            <input type="number"  className="form-control m-3" value={numPreguntas} onChange={(e) => setNumPreguntas(Number(e.target.value))} />
          </label>
          <label>
            Categoría
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="form-select m-3">
              <option value="geography">Geografía</option>
              <option value="arts%26literature">Arte y Literatura</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="science%26nature">Ciencia y naturaleza</option>
              <option value="sports%26leisure">Deportes y Ocio</option>
              <option value="history">Historia </option>
            </select>
          </label>
          <label>
            Formato
            <select value={formato} onChange={(e) => setFormato(e.target.value)} className="form-select m-3">
              <option value="multiple">Múltiple</option>
              <option value="boolean">Verdadero/Falso</option>
            </select>
          </label>
        </div>
      );
};
