import React, {Component} from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula"
import "./styles.css"

function TodasPeliculas(props){
  return (
        <section className="row cards all-movies" id="movies">
            {props.peliculas.map((pelicula, idx)=> <TarjetaPelicula peliculas={pelicula} key={pelicula.title + idx} className="single-card-movie"/>)}
        </section>
      );
    }
export default TodasPeliculas;

