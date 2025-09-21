import React from 'react'
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula'
//import "./styles.css"

function HomePeliculas(props) {
  return (
    <section className="row cards all-movies" id="movies">
        {props.peliculas.map((pelicula, idx) => <TarjetaPelicula peliculas={pelicula} key={pelicula.title + idx}/>)}
    </section>
  )
}
export default HomePeliculas