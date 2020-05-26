import React from "react";
import FunctionalComponent from "./components/Functional.component";
import PureComponent from "./components/Pure.component";
import RComponent from "./components/RComponent.component";
import { RClass } from "./components/RClass.component";
import { Element } from "./components/Element.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FunctionalComponent></FunctionalComponent>
      <PureComponent></PureComponent>
      <RComponent></RComponent>
      <RClass></RClass>
      {Element}
    </div>
  );
}

export default App;
