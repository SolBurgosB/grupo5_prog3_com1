import React, {Component} from "react";
import HomeSeries from "../../components/HomeSeries/HomeSeries";

class SeriesHome extends Component{
    constructor(props){
        super(props)
        this.state={
            series: [],
            pedidoInicialCompleto: false,
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=9b992146006f315e9afbc6413f499b4e')
        .then((res)=>res.json())
        .then((series)=>{console.log(series);
            this.setState({series: series.results, pedidoInicialCompleto: true})
        })
        .catch((error)=>console.log(error))
       
    }

    render(){
        let cuatroseries=[]
        this.state.series.map((serie, i) => i<4 ? cuatroseries.push(serie) : "" )
        console.log(cuatroseries);
        
        return(
            <div>
                <h1>Más populares</h1>
                {this.state.pedidoInicialCompleto ?
                <div>
                    <HomeSeries series={cuatroseries}/>
                </div>
                : 
                <h2>Cargando...</h2>}
            </div>
        )
    }
}
export default SeriesHome;