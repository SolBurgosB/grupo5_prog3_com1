import React, {Component} from "react";
import HomePeliculas from "../../components/HomePeliculas/HomePeliculas";

class PeliculasHome extends Component{
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
        let cuatropeliculas=[]
        this.state.peliculas.map((pelicula, i) => i<4 ? cuatropeliculas.push(pelicula) : "" )
        console.log(cuatropeliculas);
        
        return(
            <div>
                <h1>Próximamente</h1>
                {this.state.pedidoInicialCompleto ?
                <div>
                    <HomePeliculas peliculas={cuatropeliculas}/>
                </div>
                : 
                <h2>Cargando...</h2>}
            </div>
        )
    }
}
export default PeliculasHome;
