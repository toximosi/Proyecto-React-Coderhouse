//! Lógica para la muestra del detalle del producto
//importaciones --------------------------------------
//React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Componentes
import getFirestore from "../../bd/firebase/firebase";
import ProductCounter from "../ProductCounter/ProductCounter";
import ProductList from "../ProductList/ProductList";
//Framework Bootstrap o similar
import { Col, Row } from "react-bootstrap";
//SCSS
import "./ProductDetailItem.scss";
//--------------------------------------------------

const ProductDetailItem = ({ id = "" }) => {
  //variables fijas
  const [product, setProduct] = useState({}); //listado de productos
  const [loading, setLoading] = useState(true);
  //funciones internas
  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection("productos").doc(id).get();
    dbQuery
      .then((res) => {
        setProduct({ idf: res.id, ...res.data() });
      })
      .catch(console.warn("⚠️ error carga detalle de producto"))
      .finally(setLoading(false));
  }, [id]);

  return (
    <>
      <div>
        {loading ? (
          <h1>Cargando ...</h1>
        ) : (
          <>
            <div className="product-detail-item">
              <Row key={product.idf}>
                <Col xs={12} md={6}>
                  <div className="carrusel">
                    <img
                      alt={product.nombre}
                      src={`/asset/img/productos/${product.thumb}`}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <h1>{product.nombre}</h1>

                  <div className="precio">
                    {product.precioOferta > 0 ? (
                      <div>
                        <span className="precio-actual">
                          {product.precioOferta}
                          <sup>€</sup>
                        </span>
                        <span className="precio-oferta">
                          {product.precio}
                          <sup>€</sup>
                        </span>
                      </div>
                    ) : (
                      <span className="precio-actual">
                        {product.precio}
                        <sup>€</sup>
                      </span>
                    )}
                  </div>
                  <div className="referencia">Ref: {product.ref}</div>
                  <div className="caracteristica">{product.descripcion}</div>
                  <div>
                    <p>
                      <br />
                      categoria: &#160;
                      <Link to={`/products/${product.categoria}`}>
                        {product.categoria}
                      </Link>
                    </p>
                  </div>
                  <div>Solo quedan: {product.stock} unidades.</div>
                  <div className="contador">
                    <ProductCounter stock={product.stock} product={product} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="otros-productos">
              <h2>Otros productos que te pueden interesar</h2>
              <Row>
                <ProductList category={product.category} />
              </Row>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default ProductDetailItem;
