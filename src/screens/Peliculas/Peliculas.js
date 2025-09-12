import React, {Component} from "react";
import Pelicula from "../../components/Pelicula/Pelicula";

class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: [],
            pedidoInicialCompleto: false,
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9b992146006f315e9afbc6413f499b4e')
        .then((res)=>res.json())
        .then((peliculas)=>{console.log(peliculas);
            this.setState({peliculas: peliculas.results, pedidoInicialCompleto: true})
        })
        .catch((error)=>console.log(error))
       
    }
    
    render(){
        return(
            <div>
                <h1>Próximamente</h1>
                {this.state.pedidoInicialCompleto ?
                <div>
                    <Pelicula peliculas={this.state.peliculas}/>
                </div>
                : 
                <h2>Cargando...</h2>}
            </div>
        )
    }
}
export default Peliculas;
