//! manejamos todos la lógica común para todas las secciones con realción a la lista de los productos,
//importaciones --------------------------------------
//React
import React from "react";
import { createContext, useState, useEffect } from "react";

//--------------------------------------------------

export const AppContext = createContext([]);

function AppContextProvaider({ children }) {
  //variables fijas
  const [cartList, setCartList] = useState([]);
  const [amountTotal, setAmountTotal] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [idPedido, setIdPedido] = useState(0);

  //variables temporales
  //funciones internas
  //Funciones relacionadas con los productos y el carrito -----------------------------------------
  const addProduct = (i, c) => {
    c = parseInt(c);
    //Crear la propiedad cantidad si no existe, en el objeto item.
    !i.cantidadCart
      ? (i.cantidadCart = c)
      : (i.cantidadCart = i.cantidadCart + c);
    let found = cartList.find((p) => p.idf === i.idf);
    !found && setCartList([...cartList, i]);
  };
  const emptyCart = () => setCartList([]);
  const deleteProduct = (i) => setCartList(cartList.filter((p) => p.idf !== i));
  useEffect(() => {
    let c = 0; //Cantidad
    let p = 0; //precio
    cartList.forEach((e) => {
      c = c + e.cantidadCart;
      p = p + parseInt(e.precio) * e.cantidadCart;
    });
    setAmountTotal(c);
    setPriceTotal(p);
  }, [cartList]);
  //Funciones relacionadas con los la orden de compra -----------------------------------------

  return (
    <AppContext.Provider
      value={{
        cartList,
        addProduct,
        priceTotal,
        emptyCart,
        amountTotal,
        deleteProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvaider;
