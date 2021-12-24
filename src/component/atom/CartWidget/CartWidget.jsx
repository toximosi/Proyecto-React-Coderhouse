//! icono carrito del menú
//React
import React, { useContext, useState } from "react";
//import { useContext, useState } from "react";
//Context
import { AppContext } from "../../../context/AppContext";
//Framework Bootstrap o similar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
//SCSS
import "./CartWidget.scss";
/*----------------------------------------------------*/

const CartWidget = () => {
  //context
  const { priceTotal, amountTotal } = useContext(AppContext);

  return (
    <>
      <span className="cart-widget">
        {priceTotal > 0 && <span className="cart-price">{priceTotal}</span>}
        <FontAwesomeIcon icon={faBabyCarriage} />
        {amountTotal > 0 && <span className="cart-number">{amountTotal}</span>}
      </span>
    </>
  );
};
export default CartWidget;
