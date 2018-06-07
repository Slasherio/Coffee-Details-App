import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";

import {
  Redirect,
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";

import App from "./containers/App/App";
import ProductListContainer from "./containers/ProductListContainer/ProductListContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer/ProductDetailContainer";

import "bootstrap/dist/css/bootstrap.min.css";

// const history = syncHistoryWithStore(store);

render(
  <Provider store={store}>
    <Router>
      <App>
        {/* <Redirect exact from="/" to="/products" /> */}
        <Route exact path="/products" component={ProductListContainer} />
        <Route path="/products/:id" component={ProductDetailContainer} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
