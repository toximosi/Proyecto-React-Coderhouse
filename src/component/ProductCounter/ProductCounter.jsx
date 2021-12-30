//! Componente contador -> incluir productos en el carrito.
//importaciones --------------------------------------
//React
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//Context
import { AppContext } from "../../context/AppContext";
//Framework Bootstrap o similar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ButtonBlood from "../atom/ButtonBlood/ButtonBlood";
//SCSS
import "./ProductCounter.scss";
//--------------------------------------------------

const ProductCounter = ({ stock = 1, product }) => {
  //context
  const { addProduct } = useContext(AppContext);
  //variables fijas
  const [item, setItem] = useState(product);
  const [count, setCount] = useState(1);
  const [max, setMax] = useState(stock);
  const [inputType, setInputType] = useState("Agregar");
  //funciones internas
  const add = () => count < max && setCount(count + 1);
  const subtract = () => count > 1 && setCount(count - 1);

  const onAdd = () => {
    addProduct(item, count);
    setInputType("IrTienda");
  };

  const AddCart = () => {
    return (
      <>
        <div>
          <Button className="btn" onClick={onAdd}>
            <FontAwesomeIcon icon={faBabyCarriage} />
            <span> Agregar al Carrito</span>
          </Button>
        </div>
      </>
    );
  };

  const FinishBuy = () => {
    return (
      <Link to="/cart">
        <Button className="btn">Terminar compra</Button>
      </Link>
    );
  };

  return (
    <>
      <div className="product-counter">
        <Button className="btn btn-circle" onClick={add}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <input className="counter-number" value={count} />
        <Button className="btn btn-circle" onClick={subtract}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <div>
          {inputType === "Agregar" ? (
            <AddCart />
          ) : (
            <>
              <FinishBuy />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductCounter;
