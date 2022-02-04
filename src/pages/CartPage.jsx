
import { useCartContext } from "../components/context/CartContext";


const CartPage = () => {

    const { cart} = useCartContext();
    
    return(
        <div>
            <h1 className="centrado">Carrito</h1>
            {cart.map((product) => (
            <div>
                <p> Producto: {product.name}</p>
                <p> Price: {product.price}</p>
            </div>
            ))}
        </div>
    )
}

export default CartPage;