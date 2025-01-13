import React from "react";

export const Producto = (props) => {

    function onMouseEnter(e) {
        if (props.producto.inStock) {
            e.target.classList.add("disponible");
        } else {
            e.target.classList.add("noDisponible");
        }
    }

    function onMouseLeave(e) {
        // Opcional: si quieres que al salir el ratón se eliminen las clases
        e.target.classList.remove("disponible", "noDisponible");
    }

    return (
        <div className="card mb-5">
            <h2></h2>
            <img 
                src={props.producto.imagen} 
                className="card-img-top" 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
            />
            <div className="card-body mt-4">
                <h5 className="card-title">{props.producto.name}</h5>
                <p className="card-text">
                    Disponible: <input type="checkbox" className="form-check-input" checked={props.producto.inStock} readOnly />
                </p>
                <p className="card-text">
                    Precio: {props.producto.price}
                </p>
                <p className="card-text">
                    Categoría: {props.producto.category}
                </p>
                <p className="card-text">
                    Calificación: {props.producto.rating}
                </p>
            </div>
            <button type="button" className="btn btn-outline-primary">Comprar</button>
        </div>
    );
}
