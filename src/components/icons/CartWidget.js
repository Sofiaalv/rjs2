import React from "react"
import {HiShoppingCart} from "react-icons/hi"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div>
            <HiShoppingCart className="cartIcon"/>
        </div>
    )
}

export default CartWidget