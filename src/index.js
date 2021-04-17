import React from "react";
import ReactDom from "react-dom";
import App from "../App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "../redux/reducers/index";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
