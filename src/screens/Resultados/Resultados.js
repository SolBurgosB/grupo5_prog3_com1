import React, { Component } from 'react'
import TodasPeliculas from "../../components/TodasPeliculas/TodasPeliculas";


class Resultados extends Component {
    constructor(props){
            super(props)
            this.state={
                peliculas: [],
                pedidoInicialCompleto: false,
                pagina: 1,
                backup:[],
                busqueda:"",
            }
        }
        componentDidMount(){
            const termino=this.props.match.params.busqueda
            fetch(`https://api.themoviedb.org/3/movie/upcoming/?title=${termino}&api_key=9b992146006f315e9afbc6413f499b4e`)
            .then((res)=>res.json())
            .then((peliculas)=>{console.log(peliculas);
                this.setState({peliculas: peliculas.results, pedidoInicialCompleto: true, pagina: this.state.pagina +1, backup: peliculas.results})
            })
            .catch((error)=>console.log(error))
           
        }
       
        render(){
            return(
               
                <div>
                    <h2>Resultados de: {this.props.match.params.busqueda}</h2>
                    <TodasPeliculas peliculas={this.state.peliculas}/>  </div>
            )
        }
   
  }
export default Resultados
