
import {useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = ({children, name})=> {
    
    const [UnProducto, setUnProducto] = useState([]);
    
    const producto ={
        id:0,
        img:"https://images.pexels.com/photos/4466209/pexels-photo-4466209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Tazon",
        description: "Tazon ceramica",
        price: 1000
    }

return  (
    <ItemDetail UnProducto={producto}/>
)
};


export function getUnProducto () {
    return new Promise ((resolve,eject)=>{
    setTimeout(()=> resolve(ItemDetailContainer), 2000);
    });
    
};


export default ItemDetailContainer;