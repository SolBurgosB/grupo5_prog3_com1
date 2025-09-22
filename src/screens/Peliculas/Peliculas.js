import React, {Component} from "react";
import TodasPeliculas from "../../components/TodasPeliculas/TodasPeliculas";
import Filtro from "../../components/Filtro/Filtro";

class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: [],
            pedidoInicialCompleto: false,
            pagina: 1,
            backup:[],
            filtrar:[],
            busqueda:"",
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9b992146006f315e9afbc6413f499b4e`)
        .then((res)=>res.json())
        .then((peliculas)=>{console.log(peliculas);
            this.setState({peliculas: peliculas.results, pedidoInicialCompleto: true, pagina: this.state.pagina +1, backup: peliculas.results, filtrar: peliculas.results})
        }) 
        .catch((error)=>console.log(error))
        
    }
    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9b992146006f315e9afbc6413f499b4e&page=${this.state.pagina}`)
        .then(res=>res.json())
        .then((peliculas)=>this.setState({peliculas: this.state.peliculas.concat(peliculas.results), pagina: this.state.pagina+1, filtrar: this.state.filtrar.concat(peliculas.results)}))
        .catch((error)=>console.log(error))
    }
    filtrarPeliculas(texto){
        const filtrado=this.state.filtrar.filter((elm)=>elm.title.toLowerCase().includes(texto.toLowerCase()))
        this.setState({peliculas: filtrado})
    }
    render(){
        return(
            <div> 
                <h1>Películas</h1>
                <Filtro filtrarPeliculas={(texto)=>this.filtrarPeliculas(texto)} />
                {this.state.pedidoInicialCompleto ? 
                <div>
                    <TodasPeliculas peliculas={this.state.peliculas}/> 
                    <button className="btn-primary" onClick={()=>this.cargarMas()}>Cargar más</button>
                </div>
                : <h2>Cargando...</h2>}
            </div>
        )
    }
}
export default Peliculas;