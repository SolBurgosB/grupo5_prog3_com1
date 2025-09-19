import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //porque es un componente donde quiero usar props de navegación

class Formulario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: "",
            tipoBusqueda: ""
        }
    }

    controlarForm(evento) {
        evento.preventDefault()
        if (this.state.tipoBusqueda === "peliculas") {
            this.props.filtrarPeliculas(this.state.busqueda);
        } else if (this.state.tipoBusqueda === "series") {
            this.props.filtrarSeries(this.state.busqueda);
        }
        this.props.history.push(`/resultados/${this.state.busqueda}/${this.state.tipoBusqueda}`)
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
            <form className="search-form" action="/resultados" method="get" onSubmit={(evento) => this.controlarForm(evento)}>
                <input
                    type="text"
                    name="searchData"
                    onChange={(evento) => this.controlarInput(evento)}
                    placeholder="Buscar..."
                />
                <div>
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="peliculas"
                            onChange={(evento) => this.controlarRadio(evento)}
                        />
                        Películas
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="series"
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