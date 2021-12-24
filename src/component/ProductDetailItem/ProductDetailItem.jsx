//! Explicación del uso del js
//? Blibliografia:

//importaciones --------------------------------------
//React
import React, { useState, useEffect } from "react";
//import { useContext, useState } from "react";
//Context

//Componentes
import getFirestore from "../../bd/firebase/firebase";
import ProductCounter from "../ProductCounter/ProductCounter";
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

const ProductDetailItem = ({ id = "" }) => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  const [product, setProduct] = useState({}); //listado de productos
  const [loading, setLoading] = useState(true);
  //variables temporales

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
      <h1>ProductDetailItem</h1>
      <div>
        {loading ? (
          <h1>loading</h1>
        ) : (
          <div key={product.idf}>
            <ul>
              <li>id: {product.idf}</li>
              <li>
                <img
                  style={{ width: "50px", height: "auto" }}
                  src={product.imagen}
                />
              </li>
              <li>Referencia: {product.ref}</li>
              <li>nombre: {product.nombre}</li>
              <li>estado: {product.estado}</li>
              <li>caracteristica: {product.caracteristica}</li>
              <li>descripcion: {product.descripcion}</li>
              <li>precio oferta: {product.precioçOferta} + €</li>
              <li>precio: {product.precio} + €</li>
              <li>stock: {product.stock}</li>
              <li>categoria: {product.categoria}</li>
              <ProductCounter stock={product.stock} product={product} />
            </ul>
            <hr />
          </div>
        )}
      </div>
    </>
  );
};
export default ProductDetailItem;
