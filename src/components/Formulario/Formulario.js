import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //porque es un componente donde quiero usar props de navegación
import "./styles.css"

class Formulario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: "",
            tipoBusqueda: "movie" 
        }
    }

    controlarForm(evento) {
        evento.preventDefault()
        this.props.history.push(`/resultados/${this.state.tipoBusqueda}/${this.state.busqueda}`)
    }

    controlarInput(evento) {
        this.setState({ busqueda: evento.target.value },
            () => console.log(this.state.busqueda))
    }

    controlarRadio(evento) {
        this.setState({ tipoBusqueda: evento.target.value },
            () => console.log(this.state.tipoBusqueda))
    }

    render() {
        return (
            <form className="search-form" method="get" onSubmit={(evento) => this.controlarForm(evento)}>
                <input
                    type="text"
                    name="searchData"
                    onChange={(evento) => this.controlarInput(evento)}
                    placeholder="Buscar..."
                />
                <div>
                    <label className="subtitulo">
                        <input
                            type="radio"
                            name="tipo"
                            value="movie"
                            onChange={(evento) => this.controlarRadio(evento)}
                        />
                        Películas
                    </label>
                    <label className="subtitulo">
                        <input
                            type="radio"
                            name="tipo"
                            value="tv"
                            onChange={(evento) => this.controlarRadio(evento)}
                        />
                        Series
                    </label>
                </div>
                <button type="submit" class="btn btn-success btn-sm">Buscar</button>
            </form>
        )
    }
}

export default withRouter(Formulario);