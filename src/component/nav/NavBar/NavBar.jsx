//! Menú de navegación principal entre secciones
//? Blibliografia:

//importaciones --------------------------------------
//React
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

//import { useContext, useState } from "react";
//Context

//Componentes
import CartWidget from "../../atom/CartWidget/CartWidget";
//Framework Bootstrap o similar

//SCSS
import "./NavBar.scss";
//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    - preparar la creación autimática de las secciones medianta el ljaso, para unificar el menú footer y el superior.
    - Como incluir los link to?.
    - Como poner la opción las secciones en App.js?

//! IMPORTANTE:
//!EL menu se crea gracias al json: seciones.json, par aun mejor orden
----------------------------------------------------*/

const NavBar = () => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  //variables temporales

  //funciones internas
  return (
    <>
      <div class="nav-sup">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <Nav.Link href="/">
                <img src="/Asset/svg/logo-morror.svg" />
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="producto">Productos</Nav.Link>
                <Nav.Link href="detalle">Detalle</Nav.Link>
                <Nav.Link href="carrito">Carrito</Nav.Link>
                {/*<Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            */}
              </Nav>
            </Navbar.Collapse>
            <Nav>
              <Nav.Link href="carrito">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="nav-blood">
          <img src="/Asset/svg/menu-blood.svg" />
        </div>
      </div>
    </>
  );

  /*return (
    <>
      <h1>Navbar</h1>
      <div className="Menu-sup">
        <div className="logo"></div>
        <ul>
          <li>Inicio</li>
          <li>Tienda</li>
          <li>Wikimorror</li>
        </ul>
      </div>
      <div className="carrito">
        <ul>
          <li>user</li>
          <li>carrito</li>
        </ul>
      </div>
    </>
  );*/
};
export default NavBar;
