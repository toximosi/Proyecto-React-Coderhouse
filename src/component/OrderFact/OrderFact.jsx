//! Confirmación de compra
//importaciones --------------------------------------
//React
import React from "react";
import { useState, useEffect } from "react";
//Componentes
import getFirestore from "../../bd/firebase/firebase";
//Framework Bootstrap o similar
import { Col, Row } from "react-bootstrap";
//SCSS
import "./OrderFact.scss";
//--------------------------------------------------

const OrderFact = ({ idfact = "NNOW1yLlr8kGnBeciX7Y" }) => {
  //variables fijas
  const [fact, setFact] = useState([]);
  const [items, setItems] = useState([]); //listado de productos
  const [loading, setLoading] = useState(true);
  //funciones internas
  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection("orders").doc(idfact).get();
    dbQuery
      .then((res) => {
        setFact({ idf: res.id, ...res.data() });
        setItems(res.item);
      })
      .catch(console.warn("⚠️ error carga detalle de pedido"))
      .finally(setLoading(false));
  }, [idfact]);

  return (
    <>
      {loading ? (
        <h1>Cargando ...</h1>
      ) : (
        <div className="order-fact">
          <Row key={fact.idf}>
            <Col xs={12}>
              <h1>Gracias por tu compra</h1>
              <h2>
                {fact.buyer?.nombre} {fact.buyer?.apellidos}
              </h2>
              <h2>tu pedido "{fact?.idf}" se esta procesando</h2>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
export default OrderFact;
