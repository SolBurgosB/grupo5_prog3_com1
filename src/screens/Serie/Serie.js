import React, { Component } from "react";
import SerieDetalle from "../../components/SerieDetalle/SerieDetalle";

/*
  const id=props.match.params.id
  const coincidencia= props.peliculas.find((peliculas)=> peliculas.id == id)
  const pelicula=coincidencia[0];*/

class Serie extends Component {
constructor(props) {
  super(props)
  this.state = {
    series: null,
    pedidoInicialCompleto: false,
    id: props.match.params.id
  }
}
componentDidMount() {
  fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=9b992146006f315e9afbc6413f499b4e`)
    .then((res) => res.json())
    .then((serie) => {
      this.setState({series: serie, pedidoInicialCompleto: true })
    })
      .catch((error) => console.log(error))
    }
 render() {
      return(
        <React.Fragment>
        {this.state.pedidoInicialCompleto ?
          <div>
            <SerieDetalle series={this.state.series} />
          </div>
          : <h2>Cargando...</h2>}
      </React.Fragment>)
}}
export default Serie;
