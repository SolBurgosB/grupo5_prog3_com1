import React from 'react'
import TarjetaSerie from '../TarjetaSerie/TarjetaSerie'

function HomeSeries(props) {
  return (
    <section className=''>
        {props.series.map((serie, idx) => <TarjetaSerie series={serie} key={serie.title + idx}/>)}
    </section>
  )
}
export default HomeSeries