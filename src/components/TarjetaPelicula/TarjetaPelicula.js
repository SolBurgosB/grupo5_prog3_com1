import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TarjetaPelicula extends Component {
constructor(props){
    super(props)
    this.state={
        dataPeliculas: props.peliculas,
        verMas: false,
        textoBoton: "Ver Más",
    }
}; 
seleccionar(){
    this.setState({
        verMas: !this.state.verMas,
        textoBoton: this.state.verMas ? "Ver más": "Ver menos"
    })};

render() {
return (
    <div className=''>
        <img src={`https://image.tmdb.org/t/p/w342${this.state.dataPeliculas.poster_path}`} alt={`Imagen de ${this.state.dataPeliculas.title}`} />
        <h2> {this.state.dataPeliculas.title}</h2>
        <button onClick={() => this.seleccionar()} className="more">{this.state.textoBoton}</button>
        {this.state.verMas ? <p>{this.state.dataPeliculas.overview}</p>: <p></p>}
        <Link to={`/peliculas/${this.state.dataPeliculas.id}`}><button>Ver detalle</button></Link>

    </div>
)}};


export default TarjetaPelicula;
