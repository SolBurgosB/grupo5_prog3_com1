import React, { Component } from 'react'
import TodasSeries from '../../components/TodasSeries/TodasSeries'


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
    render() {
        return (
            <TodasSeries series={this.state.seriesfav}/>
        )
    }
}
