//! Página para tener una referencia del Desig System usado
//? Blibliografia:
//react-bootstrap.github.io/
//importaciones --------------------------------------
//React
import React, { useState, useEffect } from "react";
//import { useContext, useState } from "react";
//Context

//Componentes
import itemBd from "../../bd/firebase/getFetch";
//bootstrap
import { Col, Row } from "react-bootstrap";
//UIKIT
import CardProducto from "../cards/CardProducto/CardProducto";
//componentes propios UiKIt
import CardColor from "./element/CardColor/CardColor";
//Framework Bootstrap o similar
//iconos Fontawesome

//SCSS
import variables from "../../scss/uikit/color.module.scss";
//imagen prueba

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

function UiKit() {
  const [color, setColor] = useState();
  console.log(itemBd);
  //context
  //const context = useContext(contextValue);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  //variables temporales

  //funciones internas

  /* useEffect(() => {
        const promesa = new Promise((res, rej) => {
            res(variables);
            //console.log(`variables: ${variables}`);//
            //console.log(color);
        });
        promesa
            .then(data => setColor(data))
            .catch(console.log('error en promesa de UiKit'))
            .finally(console.log(color))
        
    }, [])*/

  //const [color, setColor] = useState(variables)

  //console.log(variables.map(color => color));

  return (
    <>
      {/*  <h1>UiKit</h1>
      <Row>
        <Col>
          <h2> Colores </h2>
          <CardColor />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Card </h2>
          <CardProducto />
        </Col>
      </Row> */}
    </>
  );
}
export default UiKit;
