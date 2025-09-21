import React, {Component} from "react";
import { withRouter } from "react-router-dom"; //porque es un componente donde quiero usar props de navegación
//import "./styles.css"

class Filtro extends Component{
    constructor(props){
        super(props)
        this.state={
            busqueda: ""
        }
    }
    controlarForm(evento){
        evento.preventDefault()
    }
    controlarInput(evento){
        this.setState({busqueda: evento.target.value}, () => this.props.filtrarPeliculas(this.state.busqueda));
    }


    render(){
        return(
        <form onSubmit={(evento)=> this.controlarForm(evento)}  className="filter-form px-0 mb-3" action="" method="get">
            <input onChange={(evento)=>this.controlarInput(evento)} type="text" name="filter" id="" placeholder="Buscar dentro de la lista"/>
        </form>
        )
    }
}
export default withRouter(Filtro);