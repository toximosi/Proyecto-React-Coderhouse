//! Menú de navegación principal entre secciones
//? Blibliografia:

//importaciones --------------------------------------
//React
import React from "react";
//import { useContext, useState } from "react";
//Context

//Componentes

//Framework Bootstrap o similar

//SCSS

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const NavBar = () => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  //variables temporales

  //funciones internas

  return (
    <>
      <h1>Navbar</h1>
      <div className="Menu-sup">
        <div className="logo"></div>
        <ul>
          <li>Inicio</li>
          <li>Tienda</li>
          <li>Wikimorror</li>
        </ul>
      </div>
      <div className="carrito">
        <ul>
          <li>user</li>
          <li>carrito</li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
