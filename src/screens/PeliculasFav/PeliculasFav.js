import React, { Component } from 'react'
import TodasPeliculas from '../../components/TodasPeliculas/TodasPeliculas'
import TarjetaPelicula from '../../components/TarjetaPelicula/TarjetaPelicula'

export default class Favoritos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            peliculasfav: [],
            pedidoInicialCompleto: false
        }
    }

    componentDidMount() {
        let peliculaTraida = localStorage.getItem("fav")
        let favorito = JSON.parse(peliculaTraida)
        let nuevos = []
        if (favorito != null) {
            console.log(favorito);
            favorito.map((fav) => {
                fetch(`https://api.themoviedb.org/3/movie/${fav}?api_key=9b992146006f315e9afbc6413f499b4e`)
                    .then((res) => res.json())
                    .then((peliculas) => {
                        nuevos.push(peliculas)
                        this.setState({ peliculasfav: nuevos, pedidoInicialCompleto: true })
                    })
                    .catch((error) => console.log(error))
            })
        }
        else {
            console.log(favorito)
        }
    }

    quitarFavoritos(id) {
        const pelisFiltradas = this.state.peliculasfav.filter((peli) => peli.id !== id)
        this.setState({ peliculasfav: pelisFiltradas })
    }

    render() {
        return (
            
                this.state.pedidoInicialCompleto ?
                    <div>
                        <div>
                            <h2>Películas Favoritas</h2>
                            {this.state.peliculasfav.map((pelicula, idx) => <TarjetaPelicula peliculas={pelicula} key={pelicula.id + idx} quitar={() => this.quitarFavoritos(pelicula.id)} />)}
                        </div>
                    </div>
                    :
                    <h2>Cargando...</h2>
            

        )
    }
}
