import {useContext, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount";
import { Context } from "../../Context";



function ItemDetail({ product }) {
  const { onAdd } = useContext(Context);
  const [added, setAdded] = useState(0);

  function onAddProduct(count) {
    setAdded(count);
    onAdd(product, count);
  }

  return (
    <Container>
      <div className="item-detail-container">
        <div>
          <img src={product.image} alt="Product image" />
        </div>
        <div className="product-information">
          <h1>{product.tittle}</h1>
          <p>{product.description}</p>
          <span className="product-price">Precio: ${product.price}</span>
          <br />
          <span className="product-stock">Stock: {product.stock}</span>

          <div>
            {added == 0 && (
              <ItemCount stock={product.stock} onAdd={onAddProduct} />
            )}
            <div className="ctas-container">
              {added >= 1 && (
                <Link to="/cart">
                  <Button>Finalizar compra</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ItemDetail;