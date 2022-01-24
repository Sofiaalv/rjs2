import 'bootstrap';
import "./Item.css";


const Item = ({ItemListContainer}) => {

    return(
        <div className='fila'>
            <div className='CardProduct'>
                <p>Producto: {ItemListContainer.name} </p>
                <p>Descripcion:{ItemListContainer.description}</p>
                <p>Precio: $ {ItemListContainer.price} </p>
                <button className='btn'>Agregar a Carrito</button>
            </div>
        </div>
    )
}

export default Item;