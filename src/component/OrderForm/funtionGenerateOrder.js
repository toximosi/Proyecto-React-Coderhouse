//! Función para generar la orden de pedido
//importaciones --------------------------------------
//React
import React, { useContext, useState } from "react";
import { Formik, Field, Form } from "formik";
//Context
import { AppContext } from "../../context/AppContext";
//Componentes
import firebase from "firebase/app";
import "firebase/firestore";
import getFirestore from "../../bd/firebase/firebase";

export function GenerateOrder({
  nombre,
  apellidos,
  password,
  email,
  telefono,
  pais,
  direccion,
}) {
  const {
    cartList,
    addProduct,
    priceTotal,
    emptyCart,
    amountTotal,
    deleteProduct,
  } = useContext(AppContext);
  const [idOrder, setIdORder] = useState({});

  console.log("entrar");
  const order = {};
  order.date = firebase.firestore.Timestamp.fromDate(new Date());
  order.buyer = {
    nombre: nombre,
    apellidos: apellidos,
    email: email,
    tel: telefono,
  };
  order.total = parseInt(priceTotal);
  order.item = cartList.map((c) => {
    return {
      idf: c.idf,
      ref: c.ref,
      nombre: c.nombre,
      cantidad: parseInt(c.cantidadCart),
      precio: parseInt(c.precio),
      precioTotal: parseInt(c.precio) * parseInt(c.cantidadCart),
    };
  });
  setIdORder(order);
  const db = getFirestore();
  db.collection("orders")
    .add(order)
    .then((res) => console.log(res));
}
