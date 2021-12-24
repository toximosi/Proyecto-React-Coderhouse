//! Componente contador -> incluir productos en el carrito.
//importaciones --------------------------------------
//React
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
//Context
import { AppContext } from "../../context/AppContext";
//Componentes

//Framework Bootstrap o similar

//SCSS

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    - si no hay stodk anotar como agotado.
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const ProductCounter = ({ stock = 1, product }) => {
  //context
  const { addProduct } = useContext(AppContext);
  //variables fijas
  const [item, setItem] = useState(product);
  const [count, setCount] = useState(1);
  const [max, setMax] = useState(stock);
  const [inputType, setInputType] = useState("Agregar");
  //variables temporales

  //funciones internas
  const add = () => count < max && setCount(count + 1);
  const subtract = () => count > 1 && setCount(count - 1);

  const onAdd = () => {
    addProduct(item, count);
    setInputType("IrTienda");
  };

  const AddCart = () => {
    return <button onClick={onAdd}>Agregar al Carrito</button>;
  };

  const FinishBuy = () => {
    return (
      <Link to="/cart">
        <button>Terminar compra</button>
      </Link>
    );
  };

  return (
    <>
      <h1>ProductCounter</h1>
      <div>
        <button onClick={add}>+</button>
        {count}
        <button onClick={subtract}>-</button>
        <div>
          {" "}
          {inputType === "Agregar" ? (
            <AddCart />
          ) : (
            <>
              <AddCart /> <FinishBuy />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductCounter;
