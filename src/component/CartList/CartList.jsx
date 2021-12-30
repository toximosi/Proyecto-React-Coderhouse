//! Listado de los productos añadidos al carrito
//importaciones --------------------------------------
//React
import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Context
import { AppContext } from "../../context/AppContext";
//Framework Bootstrap o similar
import { Button, Col, Row, Table } from "react-bootstrap";
//SCSS
import "./CartList.scss";
//--------------------------------------------------

const CartList = () => {
  //context
  const { cartList, priceTotal, emptyCart, amountTotal, deleteProduct } =
    useContext(AppContext);
  if (cartList.length <= 0) {
    return (
      <>
        <div className="cart-list">
          <Row>
            <Col>
              <div className="contentCart">
                <h1>El carrito esta vacio</h1>
                <p>
                  <Link to="/">
                    Pasate por nuestra tienda online y veras cosas interesantes
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="cart-list">
          <Row>
            <Col>
              <div className="contentCart">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>foto</th>
                      <th>nombre</th>
                      <th>cantidad</th>
                      <th>precio</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList.map((p) => (
                      <tr key={p.idf}>
                        <td>{p.ref}</td>
                        <td>
                          <Link to={`/detail/${p.idf}`}>
                            <img
                              className="img-pro"
                              alt={p.nombre}
                              src={`/asset/img/productos/${p.thumb}`}
                            />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/detail/${p.idf}`}>{p.nombre}</Link>
                        </td>
                        <td>{p.cantidadCart}</td>
                        <td>{p.precio}</td>
                        <td>
                          <Button onClick={() => deleteProduct(p.idf)}>
                            Borrar
                          </Button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={3}>Total</td>
                      <td>{amountTotal}</td>
                      <td>{priceTotal}</td>
                      <td>
                        <Button onClick={() => emptyCart}>
                          Vaciar Carrito
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Link to="/order">
                  <Button size="lg">Finalizar compra</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
};
export default CartList;
