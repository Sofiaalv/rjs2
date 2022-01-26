import 'bootstrap/dist/css/bootstrap.min.css';
import "./Item.css";


const Item = ({ItemListContainer}) => {

    return(
        <div className='fila'>
            <div className='CardProduct'>
                <p>Producto: {ItemListContainer.name} </p>
                <p>Precio: $ {ItemListContainer.price} </p>
                <button className='btn'>Detalles del producto</button>
            </div>
        </div>
    )
}

export default Item;