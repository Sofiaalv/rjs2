
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = ()=> {
    const {productId} = useParams ()
    const [item, setItem] = useState()

    useEffect(()=>{
        const URL = `http://localhost:3000/products/${productId}`;
        fetch (URL) 
            .then(res => res.json())
            .then(data=> setItem(data));
    }, [productId]);


    return(
        <div>
            <ItemDetail item={Item}/>
        </div>
    )

};


//export function getUnProducto () {
  //  return new Promise ((resolve,eject)=>{
  //  setTimeout(()=> resolve(ItemDetailContainer), 2000);
  ////  });
    
//};

export default ItemDetailContainer;