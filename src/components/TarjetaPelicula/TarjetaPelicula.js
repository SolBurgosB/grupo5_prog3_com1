import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import "./styles.css"

class TarjetaPelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPeliculas: props.peliculas,
            verMas: false,
            textoBoton: "Ver Más",
            seleccionado: false
        }
    };
    componentDidMount() {
        let peliculaTraida = localStorage.getItem("fav");
        let favorito = JSON.parse(peliculaTraida || "[]") ;
        if (favorito.includes(this.state.dataPeliculas.id)) {
            this.setState({ seleccionado: true });
        }
    }

    seleccionar() {
        this.setState({
            verMas: !this.state.verMas,
            textoBoton: this.state.verMas ? "Ver más" : "Ver menos"
        })
    };
    favorito(id) {
        let peliculaTraida = localStorage.getItem("fav");
        let favorito = JSON.parse(peliculaTraida || "[]") ;
        favorito.push(id);
        let peliculasToString = JSON.stringify(favorito);
        localStorage.setItem("fav", peliculasToString);
        this.setState({ seleccionado: true });
    }

    sacarFavorito(id) {
        let peliculaTraida = localStorage.getItem("fav")
        let favorito = JSON.parse(peliculaTraida || "[]");
        if (favorito) {
            let nuevofavorito = favorito.filter((favId) => favId != id)
            let peliculasToString = JSON.stringify(nuevofavorito)
            localStorage.setItem("fav", peliculasToString)
        }
        this.setState({ seleccionado: false })


        
    }
    render() {
        return (
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w342${this.state.dataPeliculas.poster_path}`} alt={`Imagen de ${this.state.dataPeliculas.title}`} className="card-img-top"/>
                <div className="cardBody">
                <h2  className="card-title"> {this.state.dataPeliculas.title}</h2>
                <button onClick={() => this.seleccionar()} className="more btn btn-primary">{this.state.textoBoton}</button>
                {this.state.verMas ? <p className='card-text'>{this.state.dataPeliculas.overview}</p> : <p></p>}
                <Link to={`/peliculas/${this.state.dataPeliculas.id}`}><button className= "btn btn-primary">Ver detalle</button></Link>
                {
                    this.state.seleccionado ?
                        <button onClick={() => this.sacarFavorito(this.state.dataPeliculas.id)}>Sacar Favorito ★</button>
                        :
                        <button onClick={() => this.favorito(this.state.dataPeliculas.id)}>Favorito ☆</button>
                }
            </div>
            </article>
        )
    }
};

export default TarjetaPelicula;