import React from "react";
import { useNavigate } from "react-router-dom";
import './ItemCount.css'
import  { useCartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

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
        if (count < "1"){
            alert("Error"); 
        }
    }

    const handleClick =() => {
        addItem(product, count)
    };



    return (
        <div>
            
            <Button onClick={restar} className="btn">-</Button>
            <span>{count}</span>
            <Button onClick={sumar} className="btn">+</Button>
            <p>Estas agregando {count} cantidades del producto.</p>
            <div>
            <Button onClick={handleClick} className="btn">Agregar al carrito</Button>
            <Button onClick={()=> navigate(`/cart`)} className="btn">Ir al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;