//! "Menú inferior" - común en todas las páginas. Se coloca al final de todas las
//? Blibliografia:

//importaciones --------------------------------------
//React
import React from "react";

//import { useContext, useState } from "react";
//Context

//Componentes

//Framework Bootstrap o similar
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
//SCSS
import "animate.css";
import "./Footer.scss";

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const Footer = () => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  //variables temporales

  //funciones internas

  return (
    <>
      {/* <h1>Footer</h1> */}

      <div className="footer">
        <div className="footer-sup">
          <div className="footer-logo">
            <img className="logo" src="/asset/svg/logo-morror.svg" />
            <div className="linea">
              <img src="/asset/svg/footer-linea.svg" />
            </div>
          </div>
          <div className="footer-mano">
            <img className="" src="/asset/img/footer-mano.png" />
          </div>
        </div>
        <div className="footer-inf">
          <Container>
            <Row>
              <Col>
                <div className="footer-social">
                  <ul className="ul-no-list">
                    <li>
                      <FontAwesomeIcon icon={faInstagram} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTiktok} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </li>
                  </ul>
                </div>
                <div className="footer-menu">
                  <ul className="ul-no-list">
                    <li>Seccion</li>
                    <li>Seccion</li>
                    <li>Seccion</li>
                    <li>Seccion</li>
                  </ul>
                  <p>--</p>
                  <ul className="ul-no-list">
                    <li>Política de cookies</li>
                    <li>Política de privacidad </li>
                    <li>Politica de devoluciones</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <div className="Copyright">
              Copyright “the cult of morror”. 1021
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Footer;
