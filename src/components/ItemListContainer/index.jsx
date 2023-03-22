import { useEffect, useState } from "react";
import Products from "../../mocks/products";

// Lista de productos
import ItemList from "../ItemList";

// MAP nos permite generar un nuevo array de otro ya creado.
//Quiero que lleve los datos de los productos:

function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [products, setProducts] = useState([]);


    useEffect(() => {
        const productsPromise = new Promise((resolve, reject) => 
        setTimeout(() => resolve(Products), 200)
        );

        productsPromise
        .then((response) => {
            if(isCategoryRoute) {
               const productsFiltered = response.filter(
                (product) => product.category === categoryId
                );
           
        setProducts(productsFiltered);
              } else{
                setProducts(response);
              }
            })
      

        .catch((err) => console.log(err));
    }, [isCategoryRoute, categoryId]);


//    console.log({ products });

    return (
        <div>
            {/* <ul>
                {Products.map((product, index) => {
                    return (
                <li key={product.id}>
                {product.name} #{index}
                </li>
                    );
                    })}
            </ul> */}
            <ItemList products={products}/>
        </div>
        
    );
}

export default ItemListContainer;