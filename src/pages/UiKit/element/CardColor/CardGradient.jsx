import { Collapse } from "bootstrap";
import "./CardColor.scss";

function CardGradient({ nombre, gradient, hex }) {
  return (
    <div className="CardColor">
      <div className="color" style={{ background: gradient }}></div>
      <div className="color-clase">{nombre}</div>
      <div className="color-text">{hex}</div>
    </div>
  );
}
export default CardGradient;
