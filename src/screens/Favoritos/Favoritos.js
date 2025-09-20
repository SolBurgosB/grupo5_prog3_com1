import React from 'react';
import PeliculasFav from '../PeliculasFav/PeliculasFav';
import SeriesFav from '../SeriesFav/SeriesFav';


function Favoritos() {
  return (
    <React.Fragment>
        <PeliculasFav />
        <SeriesFav />
    </React.Fragment>
  )
}

export default Favoritos;