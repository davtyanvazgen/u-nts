import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import initFirebase from "./firebase/fireConfig";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import servicesReducer from "./store/reducers/servicesReducer";

const rootReducer = combineReducers({
  services: servicesReducer
  // editService: editServiceReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

initFirebase();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
