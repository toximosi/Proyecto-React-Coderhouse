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
import Footer from "./component/nav/Footer/Footer";
import NavBar from "./component/nav/NavBar/NavBar";
//UIKIT
import UiKit from "./pages/UiKit/UiKit";
//Framework Bootstrap o similar
import { Container } from "react-bootstrap";
//SCSS
import "./App.scss";
import OrderFinish from "./pages/OrderFinish";

//--------------------------------------------------

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvaider>
          <NavBar />
          <Container>
            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route exact path="/products/:category" element={<Products />} />
              <Route
                exact
                path="/detail/:idProducto"
                element={<ProductDetail />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/order" element={<Order />} />
              <Route exact path="/order/:id" element={<OrderFinish />} />
              <Route
                exact
                path="/includeproduct"
                element={<IncludeProduct />}
              />
              <Route exact path="/uikit" element={<UiKit />} />
            </Routes>
          </Container>
          <Footer />
        </AppContextProvaider>
      </BrowserRouter>
    </>
  );
}
export default App;
