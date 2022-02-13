
import {HiShoppingCart} from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./CartWidget.css"

const CartWidget = () => {

    const navigate = useNavigate();
    const { cart} = useCartContext();

    console.log(cart.length)

    return (
        <div>
            <HiShoppingCart className="cartIcon" onClick={()=> navigate(`/cart`)}/>
        </div>
    )
}

export default CartWidget