import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./containers/App/App";
import Hello from "./containers/Hello/Hello";

render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/hello" component={Hello} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
