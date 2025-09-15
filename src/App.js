import React from "react";
import Home from "./screens/Home/Home";
import Pelicula from "./screens/Pelicula/Pelicula";
import Peliculas from "./screens/Peliculas/Peliculas";
import { Switch, Route } from "react-router-dom";
import Favoritos from "./screens/PeliculasFav/PeliculasFav";
import Header from "./components/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/peliculas/:id" component={Pelicula} />
        <Route path="/peliculas" component={Peliculas}/>
        <Route path="/favoritos" component={Favoritos}/>
      </Switch>
    </React.Fragment>    
  );
}

export default App;
