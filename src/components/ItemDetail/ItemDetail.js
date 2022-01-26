
import "../ItemListContainer/ItemListContainer"
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({UnProducto}) =>  {

    return  (
        
        <div className='CardProduct'>
            <img className="ImgCard" src={UnProducto.img} alt="Imagen Taza"/>
            <p>Producto: {UnProducto.name} </p>
            <p>Descripcion:{UnProducto.description}</p>
            <p>Precio: $ {UnProducto.price} </p>
            <button className='btn'>Detalles del producto</button>
        </div>
    
    )
};

export default ItemDetail