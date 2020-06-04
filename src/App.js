import React, { Component } from "react";
import "./App.scss";

//Components
import Header from "./components/HeaderComponent/HeaderComponent";
import Content from "./components/ContentComponent/ContentComponent";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
