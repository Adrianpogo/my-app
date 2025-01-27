import React from "react";
import { useState } from "react";
import { UserCard } from "./UserCard";
import axios from "axios";

export const AppUsuarios = () => {
    var [usuarios, setUsuarios] = useState([])

    //Función para obtener a los usuarios
    var fetchUsuarios = ()=>{
        axios("https://randomuser.me/api/?results=10")
        .then((respuesta)=>{
            setUsuarios(respuesta.data.results)
        })
        .catch((error)=>{
            console.log("Error al obtener usuarios", error)
        })
    }

    //Función para eliminar un usuario
    var deleteUsuario = (index)=>{
        var nuevosUsuarios = [...usuarios]
        nuevosUsuarios.splice(index, 1)
        setUsuarios(nuevosUsuarios)
    }

    //Función para ordenar los usuarios por género (primero género femenino)
    var ordenarUsuarios = ()=>{
        var usuariosOrdenados = [...usuarios].sort((a, b) => {
            if (a.gender < b.gender) return -1;
            if (a.gender > b.gender) return 1;
            return 0;
        });
        setUsuarios(usuariosOrdenados);
    }

    //Funcionalidades a añadir: 
    //  Confirmación de borrado de usuario mediante una modal
    //  Botón para mostrar 10 nuevos usuarios
    //  Boton para añadir a favoritos (Habrá una seccion de usuarios favoritos)

        
    return  <>
                <div className="container mt-5 ">
                    <h1 className="text-center mb-4">Lista de usuarios</h1>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary m-4" onClick={fetchUsuarios}>Generar usuarios</button>
                        <button className="btn btn-primary m-4" onClick={ordenarUsuarios}>Ordenar por sexo</button>
                    </div>
                    <div className="row">
                        {usuarios.map((usuario, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                                <UserCard usuario={usuario} deleteUsuario={()=>{deleteUsuario(index)}}/>
                            </div>
                        ))}
                    </div>
    
                </div>
            </>
}