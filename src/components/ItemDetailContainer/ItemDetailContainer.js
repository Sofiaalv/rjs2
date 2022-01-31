
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = ()=> {
    const {productId} = useParams ()
    const [product, setProduct] = useState()

    useEffect(()=>{
        const URL = `http://localhost:3001/productos/${productId}`;
        fetch (URL) 
            .then(res => res.json())
            .then(data=> setProduct(data));
    }, [productId]);


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