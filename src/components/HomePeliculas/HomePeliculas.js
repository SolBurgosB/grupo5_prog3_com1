import React from 'react'
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula'

function HomePeliculas(props) {
  return (
    <section className=''>
        {props.peliculas.map((pelicula, idx) => <TarjetaPelicula peliculas={pelicula} key={pelicula.title + idx}/>)}
    </section>
  )
}
export default HomePeliculas