//! Context -> centralizamos todas las llamadas y logica relacionada con la bd de los productos.
//importaciones --------------------------------------
//Base de datos --> MONGO
import getFirestore from "./firebase/firebase";
//React
import { createContext, useEffect, useState } from "react";
//Componentes

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE: CONTEXT PRODUCTOS
----------------------------------------------------*/

const GetFirebase = () => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  let productDb = [];
  let loading = false;
  //variables temporales
  //funciones useEffect

  const db = getFirestore();
  const dbQuery = db.collection("productos");
  dbQuery
    .get()
    .then((data) => {
      if (data.size === 0) {
        console.log("error 400: no se han cargado datos de la bd");
        return;
      } else {
        productDb = data.docs.map(
          (item) => ({ idf: item.id, ...item.data() }) //idf es el id automático que proporciona firebase, lo incluimos dentro del array, para poder tener una referencia única
        );
      }
    })
    .catch(console.warn("error 400: fallo de carga de bd firebase"))
    .finally({ loading: true, productDb });
};

export default GetFirebase;
