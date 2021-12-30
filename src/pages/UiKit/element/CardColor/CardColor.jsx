import { Collapse } from "bootstrap";
import "./CardColor.scss";

function CardColor({ nombre, hex }) {
  return (
    <div className="CardColor">
      <div className="color" style={{ backgroundColor: hex }}></div>
      <div className="color-clase">{nombre}</div>
      <div className="color-text">{hex}</div>
    </div>
  );
}
export default CardColor;
