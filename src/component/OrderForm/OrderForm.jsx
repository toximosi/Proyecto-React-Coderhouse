//! Formulario de pedido
//importaciones --------------------------------------
//React
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
import "./OrderForm.scss";

//--------------------------------------------------

const OrderForm = () => {
  //context
  const {
    cartList,

    priceTotal,
  } = useContext(AppContext);
  //const context = useContext(contextValue);
  //variables fijas
  const [idOrder, setIdORder] = useState({});
  const [idPedido, setIdPedido] = useState("");
  const [finish, setFinish] = useState("false");
  const [validated, setValidated] = useState(false);

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
      .then((res) => setIdPedido(res.id))
      .catch(console.warn("⚠️ error al grabar pedido"))
      .finally(setFinish("true"));
  };
  //Formulario -------------------------

  const [formValues, handleInputChange] = useForm({
    nombre: "Iván",
    apellidos: "Villarrubia",
    email: "terriblehiwan@gmail.com",
    telefono: "+349019910",
    password: "12345",
    passwordRep: "12345",
    pais: "España",
    direccion: "Calle Paseo de las acacias, 14 9C",
  });
  const {
    nombre,
    apellidos,
    password,
    passwordRep,
    email,
    telefono,
    pais,
    direccion,
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(nombre, apellidos, password, email, telefono, pais, direccion);
    if (password === passwordRep) {
      generateOrder(
        nombre,
        apellidos,
        password,
        email,
        telefono,
        pais,
        direccion
      );
    } else {
      alert("las contraseñas son diferentes, escribelas de nuevo.");
    }
  };

  return (
    <>
      <div className="order-form">
        <Row>
          <Col>
            <h2>
              Ingresa tus datos para que
              <br />
              podamos mandarte tu pedido
            </h2>
            <div className="pedido-form">
              <form>
                <Row>
                  <div className="form-group col-5">
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
                  <div className="form-group col-7">
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
                  <div className="form-group col-6">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={password}
                      placeholder="pasword"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label>Repite Password</label>
                    <input
                      type="password"
                      name="passwordRep"
                      className="form-control"
                      value={passwordRep}
                      placeholder="pasword"
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
                {finish === "false" ? (
                  <Button onClick={handleSubmit}>Finalizar pedido</Button>
                ) : (
                  <Link to={`/oreder/${idPedido}`}>
                    <Button>Ver pedido</Button>
                  </Link>
                )}
              </form>
            </div>
          </Col>
          <Col xs={4}>
            <h2>
              Este es
              <br />
              tu pedido
            </h2>
            <div className="pedido-order">
              <table>
                {cartList.map((p) => (
                  <tr className="pedido-producto" key={p.idf}>
                    <td className="producto-img">
                      <Link to={`/Category/${p.idf}`}>
                        <img
                          alt={p.nombre}
                          src={`asset/img/productos/${p.thumb}`}
                        />
                      </Link>
                    </td>
                    <td className="producto-name">{p.nombre}</td>
                    <td className="producto-cantidad">
                      {parseInt(p.cantidadCart)}
                    </td>
                    <td className="producto-precio">
                      {parseInt(p.precio)}
                      <sup>€</sup>
                    </td>
                    <td className="producto-total">
                      {parseInt(p.cantidadCart) * parseInt(p.precio)}
                      <sup>€</sup>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </table>

              <div className="pedido-total">
                <span>
                  <strong>TOTAL</strong>
                </span>
                <span>
                  {priceTotal}
                  <sup>€</sup>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default OrderForm;
