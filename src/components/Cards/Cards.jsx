import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css";



function CardProduct(props){

    console.log(props);
    return(
        <div className='fila'>
            <div className='CardProduct'>
                <p>Producto: {props.product}</p>
                <p>Precio: ${props.price} </p>
                <button className='btn'>Agregar a Carrito</button>
            </div>
        </div>
    )
}

export default CardProduct;