import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { Boton } from './customComponents/Boton'; 
//import { BotonConTitulo } from './customComponents/BotonConTitulo';
//import { Titulo } from './customComponents/Titulo';
//import { Formulario } from './customComponents/Formulario';
//import { BotonConProp } from './customComponents/BotonConProp';
//import { BotonConProp2 } from './customComponents/BotonConProp2';
//import { Formulario2 } from './customComponents/Formulario2';
//import { Inputs } from './customComponents/Inputs';
//import { TiendaProductos } from './customComponents/TiendaProductos';
//import { BotonConContador } from './customComponents/BotonConContador';
//import { ImagenCambiante } from './customComponents/ImagenCambiante';
//import { PadreConectado } from './customComponents/PadreConectado';
//import { App } from './customComponents/proyecto1PokeApi/App';
//import { App } from './customComponents/proyecto2PokeApi/App';
//import { App } from './customComponents/proyecto3PokeApi/App';
//import { NavBar } from './customComponents/NavBar';
//import { ContenedorTareas } from './customComponents/proyectoTareas/ContenedorTareas';
//import { AppUsuarios } from './customComponents/proyectoUsuarios/AppUsuarios';
//import { Reloj } from './customComponents/useState/Reloj';
//import { CambiarColor } from './customComponents/useState/CambioColor';
//import { Juego } from './customComponents/tresEnRaya/Juego';
//import "./customCSS/tresEnRaya.css"
import { JuegoSnake } from './customComponents/snakeJuegos/JuegoSnake';

var click1 = () =>{
  console.log("fn1")
}

var click2 = () =>{
  console.log("fn2")
}

var inputs = [];
inputs.push(
  { required: true, type: 'text', label: "Nombre" },
  { required: true, type: 'text', label: "Apellido1" },
  { required: true, type: 'text', label: "Apellido2" },
  { required: true, type: 'number', label: "Edad" },
  { required: false, type: 'number', label: "Teléfono" },
  { required: false, type: 'text', label: "Dirección" },
  { required: false, type: 'date', label: "fecha" },
)

var productos = []; 
productos.push(   
  { id: 1, name: 'Laptop', price: 999.99, inStock: true, category: 'Electronics', rating: 4.5, imagen:'https://thumb.pccomponentes.com/w-530-530/articles/1058/10580050/1730-pc-racing-ordenador-gaming-amd-ryzen-3-3200g-16gb-480gb-ssd-windows-11-pro.jpg' },
  { id: 2, name: 'Smartphone', price: 699.99, inStock: false, category: 'Electronics', rating: 4.8, imagen:'https://thumb.pccomponentes.com/w-530-530/articles/1083/10839245/1432-samsung-galaxy-m55-5g-8-256gb-negro-libre.jpg' },   
  { id: 3, name: 'Chair', price: 49.99, inStock: true, category: 'Furniture', rating: 4.2, imagen:'https://thumb.pccomponentes.com/w-530-530/articles/1079/10798453/1426-tempest-vanquish-silla-gaming-negra-tela-transpirable.jpg' },   
  { id: 4, name: 'Desk Lamp', price: 19.99, inStock: true, category: 'Home Decor', rating: 4.0, imagen:'https://thumb.pccomponentes.com/w-530-530/articles/1028/10282376/1208-efectoled-lampara-de-escritorio-luxo-blanco-947d1e89-1e05-45bd-bd23-1a42c07f8409.jpg' },   
  { id: 5, name: 'Headphones', price: 199.99, inStock: true, category: 'Electronics', rating: 4.7, imagen:'https://thumb.pccomponentes.com/w-530-530/articles/1021/10216638/1263-jbl-tune-710bt-auriculares-circumaurales-inalambricos-negros.jpg' },   
  { id: 6, name: 'Backpack', price: 39.99, inStock: false, category: 'Accessories', rating: 4.1, imagen:'https://thumb.pccomponentes.com/w-530-530/articles/1073/10736132/1117-targus-tbb639gl-mochila-gaming-strike-ii-173-negra.jpg' },   
  { id: 7, name: 'Coffee Maker', price: 89.99, inStock: true, category: 'Appliances', rating: 4.6, imagen:'https://thumb.pccomponentes.com/w-530-530/articles/75/754809/144-philips-lor-barista-sublime-cafetera-de-capsulas-satin-blanca.jpg' } 
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
    /*---------------------------------------------- */
    /*CLASE1*/
    /*---------------------------------------------- */
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

    /*---------------------------------------------- */
    /*CLASE2*/
    /*---------------------------------------------- */
    /*
    <Formulario></Formulario>
    <BotonConProp text={"Boton con prop"} fnClick={click1}></BotonConProp>
    <BotonConProp text={"Boton con prop"} text1={"2"} fnClick={click2}></BotonConProp>

    <Formulario></Formulario>
    <BotonConProp2 textoMostrar={"Info"}></BotonConProp2>

    <Formulario2 inputs={inputs}></Formulario2>
    <TiendaProductos productos={productos}></TiendaProductos>
    */
    
    /*---------------------------------------------- */
    /*CLASE3*/
    /*---------------------------------------------- */
    /*
    
    <BotonConContador></BotonConContador> 

    <ImagenCambiante 
      src1={"https://thumb.pccomponentes.com/w-530-530/articles/75/754809/144-philips-lor-barista-sublime-cafetera-de-capsulas-satin-blanca.jpg"} 
      src2={"https://thumb.pccomponentes.com/w-530-530/articles/1073/10736132/1117-targus-tbb639gl-mochila-gaming-strike-ii-173-negra.jpg"} 
    />

    <PadreConectado></PadreConectado>

    /*---------------------------------------------- */
    /*CLASE4*/
    /*---------------------------------------------- */
    /*

    <App></App>

    */
    /*---------------------------------------------- */
    /*CLASE5*/
    /*---------------------------------------------- */
    /*

    <NavBar></NavBar>
    <ContenedorTareas></ContenedorTareas>

    */
    /*---------------------------------------------- */
    /*CLASE6*/
    /*---------------------------------------------- */
    /*

    <AppUsuarios></AppUsuarios>

    */
    /*---------------------------------------------- */
    /*CLASE7*/
    /*---------------------------------------------- */
    /*

    <Reloj></Reloj>
    <CambiarColor></CambiarColor>

    */
    /*---------------------------------------------- */
    /*CLASE8*/
    /*---------------------------------------------- */
    /*
    
    <Juego></Juego>

    */
    }
    
    <JuegoSnake></JuegoSnake>
   
    


  </React.StrictMode>
);


