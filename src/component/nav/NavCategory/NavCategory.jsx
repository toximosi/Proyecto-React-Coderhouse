//! Menu lateral de la tienda
//importaciones --------------------------------------
//React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Framework Bootstrap o similar
import { Col } from "react-bootstrap";
//json
import category from "../../../json/category.json";
//SCSS
import "./NavCategory.scss";
//--------------------------------------------------
const NavCategory = () => {
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
      <Col xs={2}>
        <div className="nav-category">
          <h5>MENÚ PRODUCTOS</h5>
          <ul>
            <li>
              <Link to="/">Todos los productos</Link>
            </li>
            {navCategory.map((c) => (
              <Link key={indice++} to={`/products/${c.name}`}>
                <li>{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </Col>
    </>
  );
};
export default NavCategory;
