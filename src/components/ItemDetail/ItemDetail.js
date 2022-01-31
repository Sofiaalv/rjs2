
import "../ItemListContainer/ItemListContainer"
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({product}) =>  {

    return  (
        
        <div className='CardProduct'>
            <img className="ImgCard" src={product.img} alt={product.name}/>
            <p>Producto: {product.name} </p>
            <p>Descripcion:{product.description}</p>
            <p>Precio: $ {product.price} </p>
            <button className='btn'>Agregar a carrito</button>
        </div>
    
    )
};

export default ItemDetail