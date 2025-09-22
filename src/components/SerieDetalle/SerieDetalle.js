import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "./styles.css"

class SerieDetalle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSeries: props.series,
    }
  }
  render() {
    return (
      <div className="detalle">
        <h2 className="alert alert-warning">{this.state.dataSeries.name}</h2>
        <section className="row detalle">
          <img src={`https://image.tmdb.org/t/p/w342${this.state.dataSeries.poster_path}`} className="col-md-6" alt={`Imagen de ${this.state.dataSeries.name}`} />
          <section className="col-md-6 info">
            <h3>Descripción</h3>
            <p className="description">{this.state.dataSeries.overview}</p>
            <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno: </strong>{this.state.dataSeries.first_air_date}</p>
            <p className="mt-0 mb-0"><strong>Género: </strong>{this.state.dataSeries.genres.map((genero)=><span>{genero.name}</span>)}</p> 
            <p className="mt-0" id="votes"><strong>Puntuación: </strong>{this.state.dataSeries.vote_average}</p>
          </section>
        </section>
      </div>
    )
  }
}
export default SerieDetalle;