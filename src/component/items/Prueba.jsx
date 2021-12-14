import React, { useContext, useEffect, useState } from "react";
import GetFirebase, { productDb } from "../../bd/getFirebase";
const Prueba = () => {
  const [productoList, setProductoList] = useState([]);
  useEffect(() => {
    productDb.then(setProductoList(productDb));
  }, []);
  return <h1>Hola</h1>;
};
export default Prueba;
