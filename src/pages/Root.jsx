import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Details from "./Details";
import NotFound from "./NotFound";

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
