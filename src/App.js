import React from "react";
import Home from "./screens/Home/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} exact={true} />
      </Switch>
    </React.Fragment>    
  );
}

export default App;
