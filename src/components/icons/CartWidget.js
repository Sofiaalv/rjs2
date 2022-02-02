import React from "react"
import {HiShoppingCart} from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {

    const navigate = useNavigate();
    return (
        <div>
            <HiShoppingCart className="cartIcon" onClick={()=> navigate(`/cart`)}/>
        </div>
    )
}

export default CartWidget