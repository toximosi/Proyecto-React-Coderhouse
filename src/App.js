//! Página para tener una referencia del Desig System usado
//? Blibliografia:
//react-bootstrap.github.io/
//importaciones --------------------------------------
//React
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
//import { useContext, useState } from "react";
//Context

//Componentes
import ItemContainerList from "./component/items/ItemListContainer/ItemListContainer";
import ItemDetail from "./component/items/ItemDetail/ItemDetail";
import ItemCart from "./component/items/ItemCart/ItemCart";
import Prueba from "./component/items/Prueba";
//bootstrap
import { Col, Row, Container } from "react-bootstrap";
//UIKIT
import UiKit from "./component/UiKit/UiKit";
import Footer from "./component/nav/Footer/Footer";
import NavBar from "./component/nav/NavBar/NavBar";
//Framework Bootstrap o similar
//iconos Fontawesome

//SCSS
import "./App.scss";
import GetFetch from "./bd/firebase/getFetch";

//imagen prueba

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

//import logo from './logo.svg';
//Css

//React

//Componetes

//bootstrap

//----------------------------------------------------------------------------------

function App() {
  return (
    <>
      <Container>
        <Prueba />
      </Container>

      {/* <BrowserRouter>
        <div className="cont">
          <NavBar />
          <Container>
            <Routes>
              <Route exact path="/" element={<UiKit />} />
              <Route exact path="/productos" element={<ItemContainerList />} />
              <Route exact path="/detalle" element={<ItemDetail />} />
              <Route exact path="/carrito" element={<ItemCart />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </BrowserRouter> */}
    </>
  );
}
export default App;
