//! Página para tener una referencia del Desig System usado
//? Blibliografia:
//react-bootstrap.github.io/
//importaciones --------------------------------------
//React
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Context
import AppContextProvaider from "./context/AppContext";
//Paginas
import Products from "./pages/Products";
import Inicio from "./pages/Inicio";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import IncludeProduct from "./pages/IncludeProduct";
//Componentes

//UIKIT
import UiKit from "./component/UiKit/UiKit";
import Footer from "./component/nav/Footer/Footer";
import NavBar from "./component/nav/NavBar/NavBar";
//Framework Bootstrap o similar
import { Container } from "react-bootstrap";
//SCSS
import "./App.scss";

//--------------------------------------------------

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvaider>
          <NavBar />
          <Container>
            <Routes>
              <Route exact path="/" element={<Inicio />} />
              <Route exact path="/products/" element={<Products />} />
              <Route exact path="/products/:category" element={<Products />} />
              <Route
                exact
                path="/detail/:idProducto"
                element={<ProductDetail />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/order" element={<Order />} />
              <Route
                exact
                path="/includeproduct"
                element={<IncludeProduct />}
              />
            </Routes>
          </Container>
          <Footer />
        </AppContextProvaider>
      </BrowserRouter>
    </>
  );
}
export default App;
