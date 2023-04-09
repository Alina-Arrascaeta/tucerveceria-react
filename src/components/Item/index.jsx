import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import "./item.css";


function Item({ product }) {
    return (

    
        <Card style={{ width: '300px',   margin:'0 auto', display: 'inline-block' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title><p>{product.tittle}</p></Card.Title>
        <Card.Text><p>$ {product.price}</p>
        </Card.Text>
        <Link to={`/item/${product.id}`}>
        
        <Button key={product.id} style={{background:'Goldenrod', border:'Goldenrod'}}>Ver producto</Button>
        </Link>
      </Card.Body>
    </Card>



    
    
  );
}


export default Item;