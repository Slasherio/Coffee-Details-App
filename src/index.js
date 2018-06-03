import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./containers/App/App";
import Products from "./containers/ProductsContainer/Products";
import ProductDetail from "./containers/ProductsDetailContainer/ProductDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
