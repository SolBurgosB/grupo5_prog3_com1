import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "./styles.css"

class PeliculaDetalle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataPeliculas: props.peliculas,
    }
  }
  render() {
    return (
      <div className="detalle">
        <h2 className="alert alert-primary"> {this.state.dataPeliculas.title}</h2>
        <section className="row detalle">
          <img src={`https://image.tmdb.org/t/p/w342${this.state.dataPeliculas.poster_path}`} alt={`Imagen de ${this.state.dataPeliculas.title}`} className="col-md-6" />
          <section className="col-md-6 info">
            <h3>Descripción</h3>
            <p className="description">{this.state.dataPeliculas.overview}</p>
            <p className="mt-0 mb-0" id="release-date"> <strong>Fecha de estreno: </strong> {this.state.dataPeliculas.release_date}</p>
            <p className="mt-0 mb-0 length"><strong>Duración: </strong> {this.state.dataPeliculas.runtime}</p>
            <p className="mt-0" id="votes"><strong>Puntuación: </strong> {this.state.dataPeliculas.popularity}</p>
          </section>
        </section>
      </div>
    )
  }
}
export default PeliculaDetalle;
