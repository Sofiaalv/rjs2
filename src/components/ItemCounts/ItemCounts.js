import React from "react";
import { useNavigate } from "react-router-dom";
import './ItemCount.css'
import addItem from "../context/CartContext";

function ItemCount ({product}){

    const [count, setCount] = React.useState(0);
    const navigate = useNavigate();
    
    const sumar = () => {
        setCount (count +1)
        if (count > "9"){
            alert("No hay mas stock"); 
        }
    }
    const restar = () => {
        setCount (count -1)
    }


    return (
        <div>
            
            <button onClick={sumar} className="btn">+</button>
            <span>{count}</span>
            <button onClick={restar} className="btn">-</button>
            <div>
            <button onClick={()=> navigate(`/cart`)} className="btn">Ir al carrito</button>
            <button onClick={()=>{addItem(product, count)}} className="btn">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;