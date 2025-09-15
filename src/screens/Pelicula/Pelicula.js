import React, { Component } from "react";
import PeliculaDetalle from "../../components/PeliculaDetalle/PeliculaDetalle";

/*
  const id=props.match.params.id
  const coincidencia= props.peliculas.find((peliculas)=> peliculas.id == id)
  const pelicula=coincidencia[0];*/

class Pelicula extends Component {
constructor(props) {
  super(props)
  this.state = {
    peliculas: null,
    pedidoInicialCompleto: false,
    id: props.match.params.id
  }
}
componentDidMount() {
  fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=9b992146006f315e9afbc6413f499b4e`)
    .then((res) => res.json())
    .then((pelicula) => {
      this.setState({ peliculas: pelicula, pedidoInicialCompleto: true })
    })
      .catch((error) => console.log(error))
    }
 render() {
      return(
        <React.Fragment>
        {this.state.pedidoInicialCompleto ?
          <div>
            <PeliculaDetalle peliculas={this.state.peliculas} />
  
          </div>
          : <h2>Cargando...</h2>}
      </React.Fragment>)
}}
export default Pelicula;
