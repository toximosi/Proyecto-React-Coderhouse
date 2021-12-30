//! Botton con estilo blood
//? Blibliografia:
//importaciones --------------------------------------
//React
import React from "react";
//Framework Bootstrap o similar
//iconos Fontawesome
//SCSS
import "./ButtonBlood.scss";
import { Link } from "react-router-dom";
//--------------------------------------------------

const ButtonBlood = ({ link = "", text }) => {
  return (
    <>
      <div className="button-blood">
        <div className="button-blood-hover">
          <img src="/asset/svg/boton-blood.svg" />
        </div>
        {link !== "" ? (
          <Link to={link} className="button-text">
            {text}
          </Link>
        ) : (
          { text }
        )}
      </div>
    </>
  );
};
export default ButtonBlood;
