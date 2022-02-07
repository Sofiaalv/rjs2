import React from "react";
import { useNavigate } from "react-router-dom";
import './ItemCount.css'
import  { useCartContext } from "../context/CartContext";

function ItemCount ({product}){

    const [count, setCount] = React.useState(0);
    const navigate = useNavigate();
    const {addItem} = useCartContext();
    
    const sumar = () => {
        setCount (count +1)
        if (count > "9"){
            alert("No hay mas stock"); 
        }
    }
    const restar = () => {
        setCount (count -1)
    }

    const handleClick =() => {
        addItem(product, count)
    };


    return (
        <div>
            
            <button onClick={restar} className="btn">-</button>
            <span>{count}</span>
            <button onClick={sumar} className="btn">+</button>
            <p>Estas comprando {count} cantidades de producto.</p>
            <div>
            <button onClick={handleClick} className="btn">Agregar al carrito</button>
            <button onClick={()=> navigate(`/cart`)} className="btn">Ir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;