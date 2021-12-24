//! Formulario de pedido
//? Blibliografia:

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
//Custom Hook
import { useForm } from "../../hooks/useForm";
//Framework Bootstrap o similar
import { Button, Col, Row } from "react-bootstrap";

//SCSS

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const OrderForm = () => {
  //context
  const {
    cartList,
    addProduct,
    priceTotal,
    emptyCart,
    amountTotal,
    deleteProduct,
  } = useContext(AppContext);
  //const context = useContext(contextValue);
  //variables fijas
  const [idOrder, setIdORder] = useState({});
  const [validated, setValidated] = useState(false);
  //variables temporales

  //funciones internas

  const generateOrder = (e) => {
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
  };
  //Formulario -------------------------

  const [formValues, handleInputChange] = useForm({
    nombre: "Iván",
    apellidos: "Villarrubia",
    email: "terriblehiwan@gmail.com",
    telefono: "+349019910",
    password: "12345",
    pais: "España",
    direccion: "Calle Paseo de las acacias, 14 9C",
  });
  const { nombre, apellidos, password, email, telefono, pais, direccion } =
    formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(nombre, apellidos, password, email, telefono, pais, direccion);
    generateOrder(
      nombre,
      apellidos,
      password,
      email,
      telefono,
      pais,
      direccion
    );
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Datos</h1>
          <form>
            <Row>
              <div className="form-group col-3">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  value={nombre}
                  placeholder="Nombre"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-6">
                <label>Apellidos</label>
                <input
                  type="text"
                  name="apellidos"
                  className="form-control"
                  value={apellidos}
                  placeholder="Apellidos"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={password}
                  placeholder=""
                  onChange={handleInputChange}
                />
              </div>
            </Row>
            <Row>
              <div className="form-group col-7">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  placeholder="Email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-5">
                <label>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  className="form-control"
                  value={telefono}
                  placeholder="00 000 000"
                  onChange={handleInputChange}
                />
              </div>
            </Row>
            <Row>
              <div className="form-group col-4">
                <label>Pais</label>
                <input
                  type="text"
                  name="pais"
                  className="form-control"
                  value={pais}
                  placeholder="pais"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-8">
                <label>Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  className="form-control"
                  value={direccion}
                  placeholder="Calle, número, piso, letra"
                  onChange={handleInputChange}
                />
              </div>
            </Row>
            <Button onClick={handleSubmit}>Finalizar pedido</Button>
          </form>
        </Col>
        <Col xs={4}>
          <h1>Pedido</h1>
          {cartList.map((p) => (
            <ul key={p.idf}>
              <li>{p.nombre}</li>
              <li>{parseInt(p.cantidadCart)}</li>
              <li>{parseInt(p.precio)}</li>
              <li>{parseInt(p.cantidadCart) * parseInt(p.precio)}</li>
            </ul>
          ))}
          <hr />
          <span>{priceTotal}</span>
        </Col>
      </Row>
    </>
  );
};
export default OrderForm;
