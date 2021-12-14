//! Explicación del uso del js
//? Blibliografia:
//importaciones --------------------------------------
//React
import React from "react";
//import { useContext, useState } from "react";
//Context

//Componentes
import { BadgeProducto } from "../../atom/BadgeProducto";
//Framework Bootstrap o similar
//iconos Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
//SCSS
import "./CardProducto.scss";
//imagen prueba

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const CardProducto = () => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  //variables temporales

  //funciones internas

  return (
    <>
      <h1>CardProducto</h1>
      <div className="cardproduct">
        <div className="cabecera">
          <div className="precio">
            <div className="precio-oferta">00,00€</div>
            <div className="precio-actual">00,00€</div>
          </div>
          <div className="boton-voltear">
            Ver diseño trasero
            <img src="/asset/svg/btn-voltear.svg" />
          </div>
        </div>
        <div className="franja-negra"></div>
        <div className="imagen-producto">
          <div className="bandera">
            {/*<BadgeProducto />*/}
            <img src="/asset/svg/bandera-oferta.svg" />
          </div>
          <div className="imgen-producto-foto">
            <img src="/asset/img/plantilla/producto-front.png" />
          </div>
        </div>
        <div className="boton-blod">
          <div className="boton-blod-hover">
            <img src="/asset/svg/boton-blood.svg" />
          </div>
          <a className="boton-text">
            <FontAwesomeIcon icon="faBabyCarriage" /> Añadir al acarrito
          </a>
        </div>
      </div>
    </>
  );
};
export default CardProducto;
