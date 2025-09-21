import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import "./styles.css"

class TarjetaSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSeries: props.series,
            verMas: false,
            textoBoton: "Ver Más",
            seleccionado: false
        }
    };
    componentDidMount() {
        let serieTraida = localStorage.getItem("favs");
        let favoritos = JSON.parse(serieTraida || "[]") ;
        if (favoritos.includes(this.state.dataSeries.id)) {
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
        let serieTraida = localStorage.getItem("favs");
        let favorito = JSON.parse(serieTraida || "[]");
        favorito.push(id);
        let seriesToString = JSON.stringify(favorito);
        localStorage.setItem("favs", seriesToString);
        
        this.setState({ seleccionado: true });
    }
    sacarFavorito(id) {
        let serieTraida = localStorage.getItem("favs")
        let favorito = JSON.parse(serieTraida || "[]")
        if (favorito) {
            let nuevofavorito = favorito.filter((favId) => favId != id)
            let seriesToString = JSON.stringify(nuevofavorito)
            localStorage.setItem("favs", seriesToString)
        }
        this.setState({ seleccionado: false })
    }
    render() {
        return (
            <article className="single-card-tv">
                <img src={`https://image.tmdb.org/t/p/w342${this.state.dataSeries.poster_path}`} className="card-img-top" alt={`Imagen de ${this.state.dataSeries.name}`} />
            <div className='cardBody'>
                <h2 className="card-title">{this.state.dataSeries.name}</h2>
                <button onClick={() => this.seleccionar()} className="more btn btn-primary">{this.state.textoBoton}</button>
                {this.state.verMas ? <p className="card-text">{this.state.dataSeries.overview}</p> : <p></p>}
                <Link to={`/series/${this.state.dataSeries.id}`}><button>Ver detalle</button></Link>
                {
                    this.state.seleccionado ?
                        <button onClick={() => this.sacarFavorito(this.state.dataSeries.id)}>Sacar Favorito ★</button>
                        :
                        <button onClick={() => this.favorito(this.state.dataSeries.id)}>Favorito ☆</button>
                }
            </div>
            </article>
        )
    }
};


export default TarjetaSerie;
