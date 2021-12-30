//! Card para mostrar los productos de la tienda
//importaciones --------------------------------------
//React
import React from "react";
import { Link } from "react-router-dom";
//Componentes
import ButtonBlood from "../../atom/ButtonBlood/ButtonBlood";
//SCSS
import "./CardProducto.scss";
//--------------------------------------------------
const CardProducto = ({
  idf,
  nombre,
  precio,
  precioOferta = 0,
  imagen,
  imagenBack = "",
  estado = "",
}) => {
  precio = parseInt(precio);
  precioOferta = parseInt(precioOferta);
  //funciones internas
  function showPrecioOferta(o, p) {
    return o > 0 ? (
      <div>
        <div className="precio-oferta"> {p} €</div>
        <div className="precio-actual">{o}€</div>
      </div>
    ) : (
      <div className="precio-actual">{p}€</div>
    );
  }
  function ShowBadgeProduct(
    n = nombre,
    p = precio,
    pO = precioOferta,
    e = estado
  ) {
    let badge = "";
    switch (e) {
      case "normal":
        return;
        break;
      case "new":
        badge = "/asset/svg/bandera-nuevo.svg";
        break;
      case "offer":
        badge = "/asset/svg/bandera-oferta.svg";
        break;
    }
    return <img alt={n} src={badge} />;
  }
  return (
    <>
      <div className="cardproduct">
        <div className="cabecera">
          <div className="precio">{showPrecioOferta(precioOferta, precio)}</div>
          {imagenBack !== "" && (
            <div className="boton-voltear">
              Ver diseño trasero
              <img src="/asset/svg/btn-voltear.svg" />
            </div>
          )}
        </div>
        <div className="franja-negra"></div>
        <div className="imagen-producto">
          <div className="bandera">
            {ShowBadgeProduct(nombre, precio, precioOferta, estado)}
          </div>
          <div className="imgen-producto-foto">
            <Link to={`/detail/${idf}`}>
              {imagenBack !== "" ? (
                <div className="foto-anim-compuesta">
                  <div className="foto-front">
                    <img
                      className="base"
                      src="/asset/img/plantilla/producto-front.png"
                    />
                    <img alt={nombre} src={`/asset/img/productos/${imagen}`} />
                  </div>
                  <div className="foto-back">
                    <img
                      className="base"
                      src="/asset/img/plantilla/producto-back.png"
                    />
                    <img
                      alt={nombre}
                      src={`/asset/img/productos/${imagenBack}`}
                    />
                  </div>
                </div>
              ) : (
                <div className="foto-anim-simple foto-front">
                  <img
                    className="base"
                    src="/asset/img/plantilla/producto-front.png"
                  />
                  <img alt={nombre} src={`/asset/img/productos/${imagen}`} />
                </div>
              )}
            </Link>
          </div>
        </div>
        <ButtonBlood link={`/detail/${idf}`} text={"Ver Producto"} />
      </div>
    </>
  );
};
export default CardProducto;
