import React, { Component } from "react";
import Header from "../../components/common/Header/Header";
import Navigation from "../../components/common/Navigation/Navigation";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <div className="main-content">
          <div className="content-navigation">
            <Navigation />
          </div>
          <div className="content-children">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
