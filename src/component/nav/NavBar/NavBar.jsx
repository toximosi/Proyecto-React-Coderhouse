//! Menú de navegación principal entre secciones
//? Blibliografia:
//?https://react-bootstrap.github.io/components/navbar/
//?stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
//importaciones --------------------------------------
//React
import React from "react";
import { Link } from "react-router-dom";
//Componentes
import CartWidget from "../../atom/CartWidget/CartWidget";
//Framework Bootstrap o similar
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
//SCSS
import "./NavBar.scss";
//--------------------------------------------------

const NavBar = () => {
  //funciones internas
  return (
    <>
      {
        <div className="nav-sup">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Nav.Link href="/">
                  <img src="/Asset/svg/logo-morror.svg" />
                </Nav.Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Inicio
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products/all">
                    Shop
                  </Nav.Link>
                  <NavDropdown title="Varios" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/includeproduct">
                      Incluir productos
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/order">
                      Orden
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={Link} to="/cart">
                    Carrito
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Nav>
                <Link to="/cart">
                  <CartWidget />
                </Link>
              </Nav>
            </Container>
          </Navbar>
          <div className="nav-blood">
            <img src="/Asset/svg/menu-blood.svg" />
          </div>
        </div>
      }
    </>
  );
};
export default NavBar;
