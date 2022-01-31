import React from "react";
import './ItemCount.css'

function ItemCount (){

    const [count, setCount] = React.useState(0);

    const comprar = () => {
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
            
            <button onClick={comprar} className="btn">Agregar a carrrito</button>
            <span>{count}</span>
            <button onClick={borrar} className="btn">Borrar</button>
        </div>

    )



}

export default ItemCount;