import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css"

class PeliculaDetalle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataPeliculas: props.peliculas,
    }
  }
  componentDidMount() {
    let peliculaTraida = localStorage.getItem("fav");
    let favorito = JSON.parse(peliculaTraida || "[]");
    if (favorito.includes(this.state.dataPeliculas.id)) {
      this.setState({ seleccionado: true });
    }
  }
  favorito(id) {
    let peliculaTraida = localStorage.getItem("fav");
    let favorito = JSON.parse(peliculaTraida || "[]");
    favorito.push(id);
    let peliculasToString = JSON.stringify(favorito);
    localStorage.setItem("fav", peliculasToString);
    this.setState({ seleccionado: true });
  }

  sacarFavorito(id) {
    let peliculaTraida = localStorage.getItem("fav")
    let favorito = JSON.parse(peliculaTraida || "[]");
    if (favorito) {
      let nuevofavorito = favorito.filter((favId) => favId != id)
      let peliculasToString = JSON.stringify(nuevofavorito)
      localStorage.setItem("fav", peliculasToString)
    }
    this.setState({ seleccionado: false })

    if (this.props.quitar) {
      this.props.quitar(id)
    }

  }
  render() {
    return (
      <div className="detalle">
        <h2 className="alert alert-primary"> {this.state.dataPeliculas.title}</h2>
        <section className="row detalle">
          <img src={`https://image.tmdb.org/t/p/w342${this.state.dataPeliculas.poster_path}`} alt={`Imagen de ${this.state.dataPeliculas.title}`} className="imgpelicula col-md-6" />
          <section className="col-md-6 info">
            <h3>Descripción</h3>
            <p className="description">{this.state.dataPeliculas.overview}</p>
            <p className="mt-0 mb-0" id="release-date"> <strong>Fecha de estreno: </strong> {this.state.dataPeliculas.release_date}</p>
            <p className="mt-0 mb-0 length"><strong>Duración: </strong> {this.state.dataPeliculas.runtime}</p>
            <p className="mt-0 mb-0"><strong>Género: </strong>{this.state.dataPeliculas.genres.map((genero) => <span>{genero.name}</span>)}</p>
            <p className="mt-0" id="votes"><strong>Puntuación: </strong>{this.state.dataPeliculas.vote_average}</p>
            {
              this.state.seleccionado ?
                <button className="btn-primary" onClick={() => this.sacarFavorito(this.state.dataPeliculas.id)}>Sacar Favorito ★</button>
                :
                <button className="btn-primary" onClick={() => this.favorito(this.state.dataPeliculas.id)}>Favorito ☆</button>
            }
          </section>
        </section>
      </div>
    )
  }
}
export default PeliculaDetalle;
