//! Página para tener una referencia del Desig System usado
//? Blibliografia:
//react-bootstrap.github.io/
//importaciones --------------------------------------
//React
import React, { useState, useEffect } from "react";
//import { useContext, useState } from "react";
//Context

//Componentes

//bootstrap
import { Col, Row } from "react-bootstrap";
//UIKIT
import CardProducto from "../../component/Cards/CardProducto/CardProducto";
//componentes propios UiKIt
import CardColor from "./element/CardColor/CardColor";
//Framework Bootstrap o similar
//iconos Fontawesome

//SCSS
import variables from "../../scss/uikit/color.module.scss";
//json
import colorJson from "./element/json/color.json";
import fontJson from "./element/json/font.json";
import CardGradient from "./element/CardColor/CardGradient";
import { CardFont } from "./element/CardFont/CardFont";
//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

function UiKit() {
  const [color, setColor] = useState([]);
  const [font, setFont] = useState([]);

  useEffect(() => {
    const colorAll = new Promise((res, rej) => {
      res(colorJson);
      rej(console.warn("⚠️  error de carga del json de categorias"));
    });
    colorAll
      .then(setColor(colorJson))
      .catch(console.warn("⚠️  error de carga del menu de categorias"));
  }, [color]);

  useEffect(() => {
    const fontAll = new Promise((res, rej) => {
      res(fontJson);
      rej(console.warn("⚠️  error de carga del json de categorias"));
    });
    fontAll
      .then(setFont(fontJson))
      .catch(console.warn("⚠️  error de carga del menu de categorias"));
  }, [font]);
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
      <h1>UiKit</h1>
      <Row>
        <Col>
          <h1>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Colores </h2>
          {color.map(
            (c) =>
              c.type === "normal" && <CardColor nombre={c.nombre} hex={c.hex} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Gradient </h2>
          {color.map(
            (c) =>
              c.type === "gradient" && (
                <CardGradient
                  nombre={c.nombre}
                  hex={c.hex}
                  gradient={c.gradient}
                />
              )
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>tipografía</h1>
          {font.map((f) => (
            <CardFont />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Card </h2>
          <CardProducto />
        </Col>
      </Row>
    </>
  );
}
export default UiKit;
