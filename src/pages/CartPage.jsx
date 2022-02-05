

import { useCartContext } from "../components/context/CartContext";


const CartPage = () => {

    const { cart, removeItem, clear} = useCartContext();
    
    return(
        <div>
            <h1 className="centrado">Carrito</h1>
            {cart.map((product) => (
            <div key={product.item.id}>
                <p> Producto: {product.item.name}</p>
                <p> Producto: {product.item.count}</p>
                <p> Price: {product.item.price}</p>
                <button className="btn" onClick={()=>removeItem(product.item.id)}>Borrar Item</button>
            </div>
            ))}
            <button className="btn" onClick={clear}>Borrar todo</button>
        </div>
    )
}

export default CartPage;