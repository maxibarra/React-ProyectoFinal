import React from "react";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ItemDetail from "../components/ItemDetail";
import Cart from "../pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="" component={ItemDetail} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
