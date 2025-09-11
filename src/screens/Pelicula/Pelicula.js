import React from "react";
import PeliculaDetalle from "../../components/PeliculaDetalle/PeliculaDetalle";

function Pelicula(props) {
    const id=props.match.params.id
    const coincidencia= props.pelicula.filter((personaje)=> personaje.id == id)
    const personaje=coincidencia[0];
    return(
    <React.Fragment>
      <PeliculaDetalle title={pelicula.title} overview={pelicula.overview} popularity={pelicula.popularity} release_date={personaje.release_date} genres={peliculas.genres} runtime={peliculas.runtime} id={pelicula.id}/>
    </React.Fragment>)
}


export default Pelicula;
