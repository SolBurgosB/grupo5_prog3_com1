import React, {Component} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./styles.css"
import Formulario from '../Formulario/Formulario'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
    return (
        <nav>
            <img className={"logo"} src={"./images/logo.jpg"} alt={`Imagen del logo`} />
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
                <Formulario filtrarPeliculas = {(texto) => this.props.filtrarPeliculas(texto)}
                    filtrarSeries={(texto) => this.props.filtrarSeries(texto)}/>
            </ul>
        </nav>
    )}
}

export default Header
