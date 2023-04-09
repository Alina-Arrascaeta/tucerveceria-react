import { useContext } from "react";
import "./cardwidget.css";
import { Context } from "../../Context";
import { Link } from "react-router-dom";


function CardWidget() {
  const { productsAdded } = useContext(Context);

  return (
    <Link to="/cart">
      <button className="card-widget">
        <img src={"https://cdn-icons-png.flaticon.com/512/2838/2838895.png"} />
        {productsAdded.length}
      </button>
    </Link>
  );
}


export default CardWidget;

