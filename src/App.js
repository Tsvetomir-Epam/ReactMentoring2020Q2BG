import React, { Component } from "react";
import "./App.scss";

//Components
import Header from "./components/HeaderComponent/HeaderComponent";
import Content from "./components/ContentComponent/ContentComponent";
import Footer from "./components/FooterComponent/FooterComponent";
import { Switch, Route } from "react-router-dom";
import MovieInfoComponent from "./components/MovieInfoComponent/MovieInfoComponent";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/movie">
            <MovieInfoComponent></MovieInfoComponent>
          </Route>
        </Switch>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
