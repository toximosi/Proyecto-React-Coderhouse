//! Pagina donde se muestra el detalle del producto
//importaciones --------------------------------------
//React
import React from "react";
import { useParams } from "react-router-dom";

//Componentes
import ProductDetailItem from "../component/ProductDetailItem/ProductDetailItem";
import NavCategory from "../component/nav/NavCategory/NavCategory";
//Framework Bootstrap o similar
import { Col, Row } from "react-bootstrap";

const ProductDetail = () => {
  //variables fijas
  const { idProducto } = useParams();

  return (
    <>
      <Row>
        <NavCategory />
        <Col>
          <ProductDetailItem id={idProducto} />
        </Col>
      </Row>
    </>
  );
};
export default ProductDetail;
