import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {Formulario} from "./Formulario"
import {App} from "./proyecto3PokeApi/App"

export const NavBar = () => {
    return (
        <Router>
            <nav>
                <Link to="/proyecto3PokeApi/App">PokeApi</Link>
                <Link to="/Formulario">Formulario</Link>
            </nav>
            <Routes>
                <Route path="/proyecto3PokeApi/App" element={<App />}></Route>
                <Route path="/Formulario" element={<Formulario />}></Route>
            </Routes>
        </Router>
    )
}