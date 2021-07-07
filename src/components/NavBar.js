import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Max Shop</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/About">About</NavLink>
        <NavLink activeClassName="selected" to="/Products">Products</NavLink>
        <NavLink activeClassName="selected" to="/Contact">Contact</NavLink>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        
        <CartWidget />
        
      </Form>
    </Navbar>
  );
}

export default NavBar;
