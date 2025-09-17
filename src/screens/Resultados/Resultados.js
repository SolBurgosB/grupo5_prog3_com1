import React, { Component } from 'react'
import TodasPeliculas from "../../components/TodasPeliculas/TodasPeliculas";
import TodasSeries from '../../components/TodasSeries/TodasSeries';

class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultados: [],
            pedidoInicialCompleto: false,
            pagina: 1,
            backup: [],
            busqueda: "",
        }
    }
    componentDidMount() {
        const termino = this.props.match.params.busqueda
        const tipo = this.props.match.params.tipo

        let api = ""

        if (tipo === "series") {
            api = `https://api.themoviedb.org/3/search/tv?api_key=9b992146006f315e9afbc6413f499b4e&query=${termino}` //VER &query=
        } else {
            api = `https://api.themoviedb.org/3/search/movie?api_key=9b992146006f315e9afbc6413f499b4e&query=${termino}` //VER &query=
        }

        fetch(api)
            .then((res) => res.json())
            .then((resultados) => {
                console.log(resultados);
                this.setState({ resultados: resultados.results, pedidoInicialCompleto: true, pagina: this.state.pagina + 1, backup: resultados.results, busqueda: termino })
            })
            .catch((error) => console.log(error))

    }

    render() {
        return (

            <div>
                {this.tipo === "series" 
                  ? <div><h2>Resultados de la serie: {this.props.match.params.busqueda}</h2><TodasSeries series={this.state.resultados}/></div>
                  : <div><h2>Resultados de la pelicula: {this.props.match.params.busqueda}</h2><TodasPeliculas peliculas={this.state.resultados}/></div>
                }
            </div>
        )
    }

}
export default Resultados
