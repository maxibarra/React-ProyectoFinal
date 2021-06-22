import React from "react";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import ItemDetail from "../components/ItemDetail";
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
        <Route path="/ItemDetail/:id" component={ItemDetail} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
