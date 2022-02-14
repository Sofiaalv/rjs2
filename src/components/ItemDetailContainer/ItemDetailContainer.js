
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = ()=> {
    const {productId} = useParams ();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const db = getFirestore();
        const productsCollection = db.collection("productos");
        setIsLoading(true);

        const selectedProduct= productsCollection.doc(productId);
        selectedProduct.get().then((response)=>{
            if (!response.exists) console.log ("El producto no existe");
            setProduct({...response.data(), id:response.id});
        })
        .finally(()=> setIsLoading(false));

    }, [productId]);


    if (isLoading|| !product) return <p>Cargando......</p>

    return(
        <div>
            <ItemDetail product={product}/>
        </div>
    )

};




export default ItemDetailContainer;


//export function getUnProducto () {
  //  return new Promise ((resolve,eject)=>{
  //  setTimeout(()=> resolve(ItemDetailContainer), 2000);
  ////  });
    
//};