//! Explicación del uso del js
//? Blibliografia:

//importaciones --------------------------------------
//React
import React from "react";
import { useParams } from "react-router-dom";
//import { useContext, useState } from "react";
//Context

//Componentes
import ProductDetailItem from "../component/ProductDetailItem/ProductDetailItem";
import NavCategory from "../component/nav/NavCategory/NavCategory";
//Framework Bootstrap o similar
import { Col, Row } from "react-bootstrap";

//SCSS

const ProductDetail = () => {
  //variables fijas
  const { idProducto } = useParams();

  return (
    <>
      <Row>
        <Col xs={3}>
          <NavCategory />
        </Col>
        <Col>
          <ProductDetailItem id={idProducto} />
        </Col>
      </Row>
    </>
  );
};
export default ProductDetail;
