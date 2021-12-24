//! Página de muestra de todos los productos --> realacionada con ProductList
//importaciones --------------------------------------
//React
import React from "react";
import { useParams } from "react-router-dom";
//import { useContext, useState } from "react";
//Context

//Componentes
import ProductList from "../component/ProductList/ProductList";
import NavCategory from "../component/nav/NavCategory/NavCategory";
//Framework Bootstrap o similar
import { Col, Row } from "react-bootstrap";

//SCSS

//--------------------------------------------------
const Products = () => {
  //variables fijas
  const { category } = useParams();

  return (
    <>
      <Row>
        <Col xs={3}>
          <NavCategory />
        </Col>
        <Col>
          {category && <h1>{category}</h1>}
          <ProductList category={category} />
        </Col>
      </Row>
    </>
  );
};
export default Products;
