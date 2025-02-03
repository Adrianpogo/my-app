import React from "react";

export const Casilla = ({ value, onClick }) => {

    var buttonClass = value === "X" ? "btn-outline-primary" : value === "O" ? "btn-outline-danger" : "btn-outline-dark"
    var textClass = value === "X" ? "text-x" : value === "O" ? "text-o" : ""
    return <>
        <button className={`btn square ${buttonClass} ${textClass}`} onClick={onClick}>
            {value}
        </button>
    </>
}