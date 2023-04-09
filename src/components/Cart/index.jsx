import { useContext } from "react";
import { Context } from "./Context";
import {Container} from "react-bootstrap";

function CartComponent(){
const{productsAdded}=useContext(Context);
console.log({productsAdded});

return (
    <Container className="route-container">
   { productsAdded.map((product)=> (
        <div>
            <span>Name: {product.tittle} </span>
            <br />
            <span>Stock: {product.stock} </span>
            <br />
            
        </div>
       
    ))}
    </Container>
);
}
export default CartComponent;