import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CartForm from '../components/CartForm/CartForm';
import { useCartContext } from "../components/context/CartContext";


const CartPage = () => {

    const { cart, removeItem, clear, totalPrice} = useCartContext();
    const navigate = useNavigate();

    ///cart.length === 0 ? {} <h2> No hay productos</h2> 
    
    return(
        <div>
            <h1 className="centrado">Carrito</h1>
                <Table className="table tableStriped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map((product) => (
                        <tr key={product.item.id}>
                            <th scope="row">{product.item.id}</th>
                            <td>{product.item.name}</td>
                            <td>{product.count}</td>
                            <td>$ {product.item.price * product.count}</td>
                            <td>
                                <button className="btn" onClick={()=>removeItem(product.item.id)}>Borrar Items</button>
                            </td>
                        </tr>))}
                    </tbody>
                </Table>
            <div className='centrado'>
                
                <p>Total : ${totalPrice()}</p>
                <button className="btn" onClick={clear}>Borrar todo</button>
                <button className='btn' onClick={()=> navigate(`/products`)}>Seguir comprando</button>
            </div>
            <CartForm/>
        </div>
    )
}

export default CartPage;


