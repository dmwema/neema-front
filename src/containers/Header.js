import React from "react";
import logo from "../images/logo.png";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/ingenieurs">Ingénieurs</NavLink>
              <NavLink to="/studio">Studio</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/apropos">A propos</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
