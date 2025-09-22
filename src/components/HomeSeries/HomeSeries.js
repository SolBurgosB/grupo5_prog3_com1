import React from 'react'
import TarjetaSerie from '../TarjetaSerie/TarjetaSerie'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import "./styles.css"

function HomeSeries(props) {
  return (
    <div>
    <section className="row cards all-series" id="series">
        {props.series.map((serie, idx) => <TarjetaSerie series={serie} key={serie.title + idx}/>)}
    </section>
    <Link to={`/series`}><button className="nav-link">Ver todas</button></Link>
  </div>
  )
}
export default HomeSeries