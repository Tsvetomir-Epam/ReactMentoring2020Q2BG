import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import App from "./App";
import NoMatchComponent from "./components/NoMatchComponent/NoMatchComponent";

function Routing() {
  return (
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/movie" component={App}></Route>
      <Route component={NoMatchComponent} />
    </Switch>
  );
}

export default Routing;
