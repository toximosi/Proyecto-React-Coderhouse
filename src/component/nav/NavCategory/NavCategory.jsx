//! Explicación del uso del js
//? Blibliografia:

//importaciones --------------------------------------
//React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { useContext, useState } from "react";
//Context

//Componentes

//Framework Bootstrap o similar
//json
import category from "../../../json/category.json";
//SCSS

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    - Estados
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const NavCategory = () => {
  //context
  //const context = useContext(contextValue);
  //variables fijas
  const [navCategory, setNavCategory] = useState([]);
  //variables temporales
  let indice = 0;
  //funciones internas

  useEffect(() => {
    const NavCategoryAll = new Promise((res, rej) => {
      res(category);
      rej(console.warn("⚠️  error de carga del json de categorias"));
    });
    NavCategoryAll.then(setNavCategory(category)).catch(
      console.warn("⚠️  error de carga del menu de categorias")
    );
  }, [navCategory]);

  return (
    <>
      <h1>NavCategory</h1>
      <ul>
        <li>
          <Link to="/products">Todos los productos</Link>
        </li>
        {navCategory.map((c) => (
          <Link key={indice++} to={`/products/${c.name}`}>
            <li> {c.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default NavCategory;
