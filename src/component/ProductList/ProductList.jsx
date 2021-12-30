//! Muestra de los productos
//importaciones --------------------------------------
//React
import React from "react";
import { useState, useEffect } from "react";
//Context
import getFirestore from "../../bd/firebase/firebase";
//Componentes
import CardProducto from "../Cards/CardProducto/CardProducto";
//Framework Bootstrap o similar
import { Row, Col } from "react-bootstrap";
//--------------------------------------------------

const ProductList = ({ category = "all", column = 2 }) => {
  //variables fijas
  const [producstBd, setProducstBd] = useState([]); //listado de productos
  const [loading, setLoading] = useState(true);
  //funciones internas
  useEffect(() => {
    let tempProduct = [];
    const db = getFirestore();
    const dbQuery = db.collection("productos").get();
    dbQuery
      .then((d) => {
        d.size === 0 //revisamos si devuelve datos
          ? console.warn("⚠️ no hay datos")
          : (tempProduct = d.docs.map((item) => ({
              idf: item.id,
              ...item.data(),
            })));
      })
      .then((res) => {
        //dependiendo si se ha seleccionado todos los elementos o solo una categoria
        if (category === "all") {
          setProducstBd(tempProduct);
        } else {
          setProducstBd(tempProduct.filter((i) => i.categoria === category));
        }
      })
      .catch(console.warn("⚠️ error carga bd de productos"))
      .finally(setLoading(false));
  }, [category]);

  return (
    <>
      <div>
        {loading ? (
          <h1>loading</h1>
        ) : (
          <Row>
            {producstBd.map((p) => (
              <Col xs={12} md={12 / column} key={p.idf}>
                <CardProducto
                  idf={p.idf}
                  nombre={p.nombre}
                  precio={p.precio}
                  precioOferta={p.precioOferta}
                  imagen={p.imagen}
                  imagenBack={p.imagenBack}
                  estado={p.estado}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};
export default ProductList;
