//! Explicación del uso del js
//? Blibliografia:

//importaciones --------------------------------------
//React
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useContext, useState } from "react";
//Context
import getFirestore from "../../bd/firebase/firebase";
//Componentes

//Framework Bootstrap o similar

//SCSS

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const ProductList = ({ category = "all" }) => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  const [producstBd, setProducstBd] = useState([]); //listado de productos
  const [loading, setLoading] = useState(true);
  //variables temporales

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
      <h1>ProductList</h1>
      <div>
        {loading ? (
          <h1>loading</h1>
        ) : (
          producstBd.map((p) => (
            <div key={p.idf}>
              <ul>
                <li>id: {p.idf}</li>
                <li>
                  <img
                    style={{ width: "50px", height: "auto" }}
                    src={p.imagen}
                  />
                </li>
                <li>Referencia: {p.ref}</li>
                <li>nombre: {p.nombre}</li>
                <li>estado: {p.estado}</li>
                <li>caracteristica: {p.caracteristica}</li>
                <li>descripcion: {p.descripcion}</li>
                <li>precio oferta: {p.precioçOferta} + €</li>
                <li>precio: {p.precio} + €</li>
                <li>stock: {p.stock} + €</li>
                <li>
                  categoria:{" "}
                  <Link to={`/products/${p.categoria}`}>{p.categoria}</Link>
                </li>
                <li>
                  <Link to={`/detail/${p.idf}`}>
                    <button>Ver Producto</button>
                  </Link>
                </li>
              </ul>
              <hr />
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default ProductList;
