import React, {Component} from "react";
import "./styles.css"
import { Link } from "react-router-dom";

class PeliculaDetalle extends Component{
  constructor(props){
    super(props)
    this.state={
      dataPelicula: props.peliculas,
    }
  }
  render(){
    return(
              <div className="character-card">
                  <img src={`https://image.tmdb.org/t/p/w342${this.state.dataPeliculas.poster_path}`} alt={`Imagen de ${this.state.dataPeliculas.title}`} />
                  <h2> {this.state.dataPeliculas.title}</h2>
                  <p>{this.state.dataPeliculas.popularity}</p>
                  <p>{this.state.dataPeliculas.release_date}</p>
                  <p>{this.state.dataPeliculas.overview}</p>
                  <p>{this.state.dataPeliculas.duration}</p>
                  <p>{this.state.dataPeliculas.genres}</p>
                  <p>{this.state.dataPeliculas.runtime}</p>
              </div>
          )
    }}
export default PeliculaDetalle;