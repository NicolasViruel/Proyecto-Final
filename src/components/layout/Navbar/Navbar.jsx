import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../imagenes/Imagen1.png";
import Login from '../../Login';



const NavBar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top" >
      <Navbar className="bg-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to='/'><img src={logo} alt="logo" width="200" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto color-nav">
              <Link className="nav-link text-white" to="/">Home</Link>
              <Link className="nav-link text-white" to="/destacados">Destacados</Link>
              <Link className="nav-link text-white" to="/contacto">Contactos</Link>
              <Link className="nav-link text-white" to="/favoritos">Favoritos</Link>
              <Link className="nav-link text-white" to="/tablaproducto">Productos</Link>
              <Button variant="warning" onClick={handleShow}>
                Login
              </Button>
              <Login show={show} handleClose={handleClose} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;