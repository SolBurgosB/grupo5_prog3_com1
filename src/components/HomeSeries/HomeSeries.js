import React from 'react'
import TarjetaSerie from '../TarjetaSerie/TarjetaSerie'
//import "./styles.css"

function HomeSeries(props) {
  return (
    <section className="row cards all-series" id="series">
        {props.series.map((serie, idx) => <TarjetaSerie series={serie} key={serie.title + idx}/>)}
    </section>
  )
}
export default HomeSeries