//! icono carrito del menú
//? Blibliografia:

//importaciones --------------------------------------
//React
import React from "react";
//import { useContext, useState } from "react";
//Context

//Componentes

//Framework Bootstrap o similar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
//SCSS
import "./CartWidget.scss";
//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    - burbuja que marque la cantidad de productos en el carrito
    - enlazar con la lista de compra Context --> CartContext.jsx
    -

//! IMPORTANTE:

----------------------------------------------------*/

const CartWidget = () => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  //variables temporales

  //funciones internas

  return (
    <>
      {
        /*<h1>CartWidget</h1>*/ <span className="cart-widget">
          <FontAwesomeIcon icon={faBabyCarriage} />
          <span className="cart-number">00</span>
        </span>
      }
    </>
  );
};
export default CartWidget;
