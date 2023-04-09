import ItemDetail from "../itemDetail";
// import { useEffect, useState } from "react";
// import products from "../../mocks/products"
// import { useContext } from "../../Context";
// import { useContext } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";



function ItemDetailContainer() {
const [product, setProduct] = useState(null);
const params = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', params.id);

    getDoc(itemRef)
    .then((snapshot) => {
      if(snapshot.exists()){
        setProduct({ id: snapshot.id, ...snapshot.data() });

      }
    })
    .catch((error) => console.log({error}));

  }, []);

   if (!product) {
    return <p>Loading ...</p>;
   }
  // const { onAdd, onRemove} = useContext(Context);
  // const [oneProduct, setoneProduct] = useState({});

  // useEffect(() => {
  //   const detail = products.find(
  //     (product) => product.id === parseInt(productDetail) 
  //   );
  //   setoneProduct(detail);
  // }, [productDetail]);

  return (
    <div>
      {/* <ItemDetail product={oneProduct} /> */}
       <ItemDetail product={product} />
  
    </div>
  );
}
export default ItemDetailContainer;