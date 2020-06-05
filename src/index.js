import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundaryComponent/ErrorBoundaryComponent";

//Redux
// import { Provider } from "react-redux";
// import store from "./redux/store";

//Routing
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routing";

const wrapper = document.getElementById("container");
ReactDOM.render(
  //   <Provider store={store}>
  <ErrorBoundary>
    <Router>
      <Routing />
    </Router>
  </ErrorBoundary>,
  //   </Provider>,
  wrapper
);
