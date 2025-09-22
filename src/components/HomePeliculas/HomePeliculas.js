import React from 'react'
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import "./styles.css"

function HomePeliculas(props) {
  return (
    <div>
      <section className="row cards all-movies" id="movies">
        {props.peliculas.map((pelicula, idx) => <TarjetaPelicula peliculas={pelicula} key={pelicula.title + idx} />)}
      </section>
      <Link to={`/peliculas`}><button className="nav-link">Ver todas</button></Link>
    </div>
  )
}
export default HomePeliculas