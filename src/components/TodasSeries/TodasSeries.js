import React, {Component} from "react";
import TarjetaSerie from "../TarjetaSerie/TarjetaSerie"
import "./styles.css"

function TodasSeries(props){
  return (
        <section className="row cards all-series" id="series">
            {props.series.map((serie, idx)=> <TarjetaSerie series={serie} key={serie.name + idx} className="single-card-tv"/>)}
        </section>
      );
    }
export default TodasSeries;