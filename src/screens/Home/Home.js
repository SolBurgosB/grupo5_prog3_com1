import React from 'react';
import PeliculasHome from '../PeliculasHome/PeliculasHome';
import SeriesHome from '../SeriesHome/SeriesHome';


function Home() {
  return (
    <React.Fragment>
        <PeliculasHome />
        <SeriesHome />
    </React.Fragment>
  )
}

export default Home;