import React, { Component } from 'react'
import TodasPeliculas from '../../components/TodasPeliculas/TodasPeliculas'


export default class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculasfav: []
        }
    }
    componentDidMount() {
        let peliculaTraida = localStorage.getItem("fav")
        let favorito = JSON.parse(peliculaTraida)
        let nuevos= []
        if (favorito != null) {
            console.log(favorito);
            favorito.map((fav) => {
                fetch(`https://api.themoviedb.org/3/movie/${fav}?api_key=9b992146006f315e9afbc6413f499b4e`)
                    .then((res) => res.json())
                    .then((peliculas) => {
                        nuevos.push(peliculas)
                        this.setState({peliculasfav: nuevos})})
                    .catch((error) => console.log(error))
            })
        } 
        else {
            console.log(favorito)
        }}
    render() {
        return (
            <TodasPeliculas peliculas={this.state.peliculasfav}/>
        )
    }
}
