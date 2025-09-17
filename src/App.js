import React from "react";
import Home from "./screens/Home/Home";
import Pelicula from "./screens/Pelicula/Pelicula";
import Peliculas from "./screens/Peliculas/Peliculas";
import { Switch, Route } from "react-router-dom";
import Favoritos from "./screens/PeliculasFav/PeliculasFav";
import Header from "./components/Header/Header";
import Resultados from "./screens/Resultados/Resultados";
import Error404 from "./components/Error404/Error404";
import Serie from "./screens/Serie/Serie";
import Series from "./screens/Series/Series";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/peliculas/:id" component={Pelicula} />
        <Route path="/peliculas" component={Peliculas}/>
         <Route path="/series/:id" component={Serie}/>
         <Route path="/series" component={Series}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/resultados/:busqueda" component={Resultados}/>
        <Route component={Error404} />
      </Switch>
    </React.Fragment>    
  );
}

export default App;
