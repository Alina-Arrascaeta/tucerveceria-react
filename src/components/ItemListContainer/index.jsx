import { useEffect, useState } from "react";
// import Products from "../../mocks/products";
import {collection,  getFirestore, getDocs, query, where} from 'firebase/firestore';

// Lista de productos
import ItemList from "../ItemList";
// MAP nos permite generar un nuevo array de otro ya creado.

//Quiero que lleve los datos de los productos:

function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [products, setProducts] = useState([]);

  const getDocsFromFirebase = async (collection) => {
    await getDocs(collection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log({ error }));
  };

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if(isCategoryRoute) {
       const queryResult = query(
        itemsCollection, where("category", "==", categoryId));
      
       getDocs(queryResult)
       .then((snapshot) => {
         const docs = snapshot.docs;
         setProducts(docs.map((doc) => {
           return {id: doc.id, ...doc.data()};
         })
         );
   
       })
       .catch((error) => console.log({ error }));
                  } else{
                  

    getDocsFromFirebase(itemsCollection);

      }


  },[categoryId]);


    // useEffect(() => {
    //     const productsPromise = new Promise((resolve, reject) => 
    //     setTimeout(() => resolve(Products), 200)
    //     );

    //     productsPromise
    //     .then((response) => {
    //         if(isCategoryRoute) {
    //            const productsFiltered = response.filter(
    //             (product) => product.category === categoryId
    //             );
           
    //     setProducts(productsFiltered);
    //           } else{
    //             setProducts(response);
    //           }
    //         })
      

    //     .catch((err) => console.log(err));
    // }, [isCategoryRoute, categoryId]);


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