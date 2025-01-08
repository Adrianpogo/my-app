import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Boton } from './customComponents/Boton'; 
import { BotonConTitulo } from './customComponents/BotonConTitulo';
import { Titulo } from './customComponents/Titulo';
import { Formulario } from './customComponents/Formulario';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
    /*<App />

    /*Componentes por separado
    <Titulo />
    <Boton />

    /*Componentes por juntos
    <BotonConTitulo />
    

    <Formulario />
    <button>Boton morado</button>
    <Formulario />
    <Formulario />

    */}
  </React.StrictMode>
);


