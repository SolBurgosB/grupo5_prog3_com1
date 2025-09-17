import React, {Component} from "react";
import { withRouter } from "react-router-dom"; //porque es un componente donde quiero usar props de navegación


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
        <form onSubmit={(evento)=> this.controlarForm(evento)}>
            <input onChange={(evento)=>this.controlarInput(evento)} />
        </form>
        )
    }
}
export default withRouter(Filtro);