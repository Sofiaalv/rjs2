import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = ({children, name})=> {


    const [ItemDetailContainer, setItemDetailContainer] = useState([]);  //aca me da subrayado en amarillo, error//
    
    useEffect(()=>{
      getItemDetailContainer()
      .then((data)=> setItemDetailContainer(data))
      .catch((error)=> console.log(error));
    }, []);

};


function getItemDetailContainer() {

    return new Promise ((resolve,eject)=>{
        setTimeout(()=> resolve(ItemDetail), 2000);
    });
    
};


export default ItemDetailContainer;

