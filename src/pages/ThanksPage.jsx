import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../components/context/CartContext";
import { getFirestore } from "../firebase/firebase";
import { Button } from "react-bootstrap";


const ThanksPage = () => {
    const {orderId} = useParams();
    const [order, setOrder] = useState ({});
    const { cartQuantity, totalPrice, clear} = useCartContext();
    const navigate = useNavigate();

    useEffect(()=>{
        const db = getFirestore();
        db.collection("orders")
        .doc(orderId)
        .get()
        .then((res) => setOrder({id: res.id,...res.data()}
        ));
    }, [orderId]);
    console.log (order)

    if (!order.id) {
        return <h2>Cargando....</h2>
    }

    return (
        <div className="centrado">
            <h1>Gracias {order?.buyer?.name} por tu compra!</h1>
            <h2>Detalle:</h2>
            {order?.items.map((product) => {
                return <h4> {cartQuantity}{product.item.name}{totalPrice}</h4>;
            })}
            <Button className='btn' onClick={()=> navigate(`/products`)} >Volver a productos</Button>
        </div>
    )
}


export default ThanksPage;