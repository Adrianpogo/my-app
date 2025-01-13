import React from "react";
import { Producto } from "./Producto";

export const TiendaProductos = ({productos}) => {
    return  <div className="row m-5">
                {
                    productos && productos.map((producto, indice) =>(
                        <div key={indice} className="col-md-3 col-sm-4">
                            <Producto producto={producto}></Producto>
                        </div>
                    ))
                }

            </div>
}