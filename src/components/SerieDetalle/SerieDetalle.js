import React, {Component} from "react";
import { Link } from "react-router-dom";

class SerieDetalle extends Component{
  constructor(props){
    super(props)
    this.state={
      dataSeries: props.series,
    }
  }
  render(){
    return(
              <div className="character-card">
                  <img src={`https://image.tmdb.org/t/p/w342${this.state.dataSeries.poster_path}`} alt={`Imagen de ${this.state.dataSeries.name}`} />
                  <h2> {this.state.dataSeries.name}</h2>
                  <p>{this.state.dataSeries.popularity}</p>
                  <p>{this.state.dataSeries.first_air_date}</p>
                  <p>{this.state.dataSeries.overview}</p>
                  
              </div>
          )
    }}
export default SerieDetalle;