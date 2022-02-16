import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";

const ThanksPage = () => {
    const {orderId} = useParams()
    const [order, setOrder] = useState ({})

    useEffect(()=>{
        const db = getFirestore();
        db.collection("orders")
        .doc(orderId)
        .get()
        .then((res) => setOrder({id: res.id,...res.data()}
        ));
    }, [orderId]);
    console.log (order)

    return (
        <div className="centrado">
            <h1>Gracias {order?.buyer?.name} por tu compra!</h1>
            <h2>Detalle:</h2>
            <p>{order?.items[0]?.item?.name}</p>
            
        </div>
    )
}


export default ThanksPage;