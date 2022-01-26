
import "../ItemListContainer/ItemListContainer"

const ItemDetail = (ItemListContainer) =>  {


    <div className='fila'>
    <div className='CardProduct'>
        <p>{ItemListContainer.img}</p>
        <p>Producto: {ItemListContainer.name} </p>
        <p>Descripcion:{ItemListContainer.description}</p>
        <p>Precio: $ {ItemListContainer.price} </p>
        <button className='btn'>Detalles del producto</button>
    </div>
</div>
};

export default ItemDetail