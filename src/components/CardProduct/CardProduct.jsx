import 'bootstrap';
import "./CardProduct.css";




function CardProduct({product, price}){

    return(
        <div className='fila'>
            <div className='CardProduct'>
                <p>Producto: {product}</p>
                <p>Precio: ${price} </p>
                <button className='btn'>Agregar a Carrito</button>
            </div>
        </div>
    )
}

export default CardProduct;