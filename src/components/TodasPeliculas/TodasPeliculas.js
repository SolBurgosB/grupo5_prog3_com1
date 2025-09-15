import React, {Component} from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula"
import "./styles.css"

function TodasPeliculas(props){
  return (
        <section className="card-container characters">
            {props.peliculas.map((pelicula, idx)=> <TarjetaPelicula peliculas={pelicula} key={pelicula.title + idx}/>)}
        </section>
      );
    }
export default TodasPeliculas;

