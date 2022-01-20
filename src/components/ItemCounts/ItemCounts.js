import React from "react";
import './ItemCount.css'

function Stock (){

    const [count, setCount] = React.useState(0);

    const comprar = () => {
        setCount (count +1)

        if (count > "5"){
            alert("No hay mas stock"); 
        }
    }
    const borrar = () => {
        setCount (count -1)
    }

    return (

        <div>
            <h1>Contador de Stock</h1>
            <button onClick={comprar} className="btn">Agregar</button>
            <span>{count}</span>
            <button onClick={borrar} className="btn">Borrar</button>
        </div>

    )



}

export default Stock;