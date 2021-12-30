//! Muestra de la información final del pedido
//importaciones --------------------------------------
//React
import React from "react";
import { useParams } from "react-router-dom";
//Componentes
import OrderFact from "../component/OrderFact/OrderFact";
//--------------------------------------------------

const OrderFinish = () => {
  //variables fijas
  const { idFactura } = useParams();

  return (
    <>
      <OrderFact idfact={idFactura} />
    </>
  );
};
export default OrderFinish;
