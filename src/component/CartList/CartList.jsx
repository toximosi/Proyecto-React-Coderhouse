//! Listado de los productos añadidos al carrito
//? Blibliografia:

//importaciones --------------------------------------
//React
import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Context
import { AppContext } from "../../context/AppContext";
//Componentes

//Framework Bootstrap o similar
import { Col, Row, Table } from "react-bootstrap";

//SCSS

//--------------------------------------------------
/*--------------------------------------------------

 //* TODO:
    -
    -
    -

//! IMPORTANTE:

----------------------------------------------------*/

const CartList = () => {
  //context
  const {
    cartList,
    addProduct,
    priceTotal,
    emptyCart,
    amountTotal,
    deleteProduct,
  } = useContext(AppContext);
  //variables fijas
  //const [state, setstate] = useState(initialState);
  //variables temporales

  //funciones internas

  if (cartList.length <= 0) {
    return (
      <>
        <Row>
          <Col>
            <div className="contentCart">
              <h1>El carrito esta vacio</h1>
              <p>
                <Link to="/">
                  {" "}
                  Pasate por nuestra tienda online y veras cosas interesantes
                </Link>{" "}
              </p>
            </div>
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row>
          <Col>
            <div className="contentCart">
              <Table striped bordered hover>
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
                      <td>{p.id}</td>
                      <td>
                        <img className="img-pro" src={p.imagen} />
                      </td>
                      <td>{p.nombre}</td>
                      <td>{p.cantidadCart}</td>
                      <td>{p.precio}</td>
                      <td>
                        <button onClick={() => deleteProduct(p.idf)}>
                          Borrar
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3}>Total</td>
                    <td>{amountTotal}</td>
                    <td>{priceTotal}</td>
                    <td>
                      <button onClick={() => emptyCart}>Vaciar Carrito</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </>
    );
  }
};
export default CartList;
