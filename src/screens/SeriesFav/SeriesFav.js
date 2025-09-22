import React, { Component } from 'react'
import TodasSeries from '../../components/TodasSeries/TodasSeries'
import TarjetaSerie from '../../components/TarjetaSerie/TarjetaSerie'


export default class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seriesfav: []
        }
    }
    componentDidMount() {
        let serieTraida = localStorage.getItem("favs")
        let favorito = JSON.parse(serieTraida)
        let nuevos= []
        if (favorito != null) {
            console.log(favorito);
            favorito.map((favs) => {
                fetch(`https://api.themoviedb.org/3/tv/${favs}?api_key=9b992146006f315e9afbc6413f499b4e`)
                    .then((res) => res.json())
                    .then((series) => {
                        nuevos.push(series)
                        this.setState({seriesfav: nuevos})})
                    .catch((error) => console.log(error))
            })
        } 
        else {
            console.log(favorito)
        }}

    quitarFavoritos(id) {
        const seriesFiltradas = this.state.seriesfav.filter((serie)=>serie.id !==id)
        this.setState({seriesfav: seriesFiltradas})
    }

    render() {
        return (
            <div>
                {this.state.seriesfav.map((serie, idx) => <TarjetaSerie series={serie} key={serie.id + idx} quitar={() => this.quitarFavoritos(serie.id)} />)}
            </div>
        )
    }
}

