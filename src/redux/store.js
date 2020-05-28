import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import combinedReducers from "./reducers";

export const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
