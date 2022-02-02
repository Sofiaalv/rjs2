import React from "react";
import { useNavigate } from "react-router-dom";
import './ItemCount.css'

function ItemCount (e){

    const [count, setCount] = React.useState(0);
    const navigate = useNavigate();

    const agregar = () => {
        setCount (count +1)

        if (count > "9"){
            alert("No hay mas stock"); 
        }
    }
    const borrar = () => {
        setCount (count -1)
    }

    return (

        <div>
            
            <button onClick={agregar} className="btn">Agregar</button>
            <span>{count}</span>
            <button onClick={borrar} className="btn">Borrar</button>
            <div>
            <button onClick={()=> navigate(`/cart`)} className="btn">Ir al carrito</button>
            </div>
        </div>

    )



}

export default ItemCount;