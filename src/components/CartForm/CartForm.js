import { useState } from 'react';
import { Form,  Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';
import { useCartContext } from '../context/CartContext';

const CartForm = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState ("");
    const [email, setEmail] = useState ("");
    const { cart, totalPrice} = useCartContext();
    let navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        if (!name || !phone || !email){
            console.log ("datos de compra incompletos");
            alert ("Por favor ingrese los Datos de compra");
            return false;
        }

        const newOrder = {
            buyer: {
                name,
                phone,
                email,
            },
            items: cart,
            total: totalPrice(),
        };

        console.log ({newOrder});

        const db = getFirestore();
        db.collection("orders")
        .add(newOrder)
        .then((res) => {
            console.log("Compra realizada correctamente", res.id);
            navigate (`/thanks/${res.id}`);
        })
        .catch((err) => console.log("Hubo un error",err));
    };


    return (
        <Form className='centrado' onSubmit={handleSubmit}>
            <h1> Datos de compra </h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <div id="nameHelp" className="form-text">Ingresa tu nombre</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">Ingresa tu email</div>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Numero de telefono</label>
                <input type="number" className="form-control" id="phone" name= "phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <Button type="submit" className="btn">Finalizar mi compra</Button>
        </Form>
    )
}

export default CartForm;