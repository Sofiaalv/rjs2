
import "../ItemListContainer/ItemListContainer"
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCounts/ItemCounts";

const ItemDetail = ({product}) =>  {

    

    return  (
        
        <div className='CardProduct centrado'>
            <img className="ImgCard" src={product?.img} alt={product?.name}/>
            <p>Producto: {product?.name} </p>
            <p>Descripcion: {product?.description}</p>
            <p>Precio: ${product?.price} </p>
            <ItemCount product ={product}/>
        </div>
    
    )
};

export default ItemDetail