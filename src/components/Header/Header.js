import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./styles.css"
import Formulario from '../Formulario/Formulario'

function Header() {
    return (
        <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link to={`/`}><p className="nav-link">Home</p></Link>
                </li>
                <li className="nav-item">
                    <Link to={`/peliculas`}><p className="nav-link">Peliculas</p></Link>
                </li>
                <li className="nav-item">
                    <Link to={`/series`}><p className="nav-link">Series</p></Link>
                </li>
                <li className="nav-item">
                    <Link to={`/favoritos`}><p className="nav-link">Favoritas</p></Link>
                </li>
                <Formulario filtrarPeliculas = {(texto) => this.filtrarPeliculas(texto)}
                    filtrarSeries={(texto) => this.filtrarSeries(texto)}/>
            </ul>
        </nav>
    )
}

export default Header
