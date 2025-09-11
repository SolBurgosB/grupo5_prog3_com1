import React from "react";
import Home from "./screens/Home/Home";
import Pelicula from "./screens/Pelicula/Pelicula";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/peliculas/:id" component={Pelicula} />
      </Switch>
    </React.Fragment>    
  );
}

export default App;
