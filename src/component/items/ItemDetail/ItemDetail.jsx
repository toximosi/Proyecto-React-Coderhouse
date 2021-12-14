//! Sección de detalle del producto
//? Blibliografia:

//importaciones --------------------------------------
//React

import React from "react";
//import { useContext, useState } from "react";
//Context

//Componentes

//Framework Bootstrap o similar
import { Tabs, Tab, Container, Row, Col, Carousel } from "react-bootstrap";
//SCSS

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const ItemDetail = () => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  //variables temporales

  //funciones internas

  return (
    <>
      {/*<h1>ItemDetail</h1>*/}
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <h1>Titulo</h1>
            <div>precio</div>
            <div>categorias</div>
            <p>caractristicas</p>
            <div>contador</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="item-detail">
              {/* Detalles */}
              <div className="producto.detalles">
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Home">
                    texto01
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    texto02
                  </Tab>
                  <Tab eventKey="contact" title="Contact" disabled>
                    texto03
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ItemDetail;
