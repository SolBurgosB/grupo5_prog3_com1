import React, {Component} from "react";
import TodasSeries from "../../components/TodasSeries/TodasSeries";
import Filtro from "../../components/Filtro/Filtro";

class Series extends Component{
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
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=9b992146006f315e9afbc6413f499b4e`)
        .then((res)=>res.json())
        .then((series)=>{console.log(series);
            this.setState({series: series.results, pedidoInicialCompleto: true, pagina: this.state.pagina +1, backup: series.results})
        }) 
        .catch((error)=>console.log(error))
        
    }
    cargarMas(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=9b992146006f315e9afbc6413f499b4e&page=${this.state.pagina}`)
        .then(res=>res.json())
        .then((series)=>this.setState({series: this.state.series.concat(series.results), pagina: this.state.pagina+1}))
        .catch((error)=>console.log(error))
    }
    filtrarSeries(texto){
        const filtrado=this.state.backup.filter((elm)=>elm.name.toLowerCase().includes(texto.toLowerCase()))
        this.setState({series: filtrado})
    }
    render(){
        return(
            <div> 
                <h1>Series</h1>
                <Filtro filtrarSeries={(texto)=>this.filtrarSeries(texto)} />
                {this.state.pedidoInicialCompleto ? 
                <div>
                    <TodasSeries series={this.state.series}/> 
                    <button onClick={()=>this.cargarMas()}>Cargar más</button>
                </div>
                : <h2>Cargando...</h2>}
            </div>
        )
    }
}
export default Series;