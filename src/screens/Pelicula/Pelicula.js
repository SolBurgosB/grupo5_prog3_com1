import React from "react";
import PeliculaDetalle from "../../components/PeliculaDetalle/PeliculaDetalle";

function Pelicula(props) {
    const id=props.match.params.id
    const coincidencia= props.peliculas.filter((pelicula)=> pelicula.id == id)
    const pelicula=coincidencia[0];

    return(
    <React.Fragment>
      <PeliculaDetalle peliculas={pelicula}/>
    </React.Fragment>)
}


export default Pelicula;
