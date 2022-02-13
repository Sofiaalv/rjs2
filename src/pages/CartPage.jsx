import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { useCartContext } from "../components/context/CartContext";


const CartPage = () => {

    const { cart, removeItem, clear, totalPrice} = useCartContext();
    
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
                            <th scope="row">1</th>
                            <td>{product.item.name}</td>
                            <td>{product.count}</td>
                            <td>$ {product.item.price}</td>
                            <td>
                                <button className="btn" onClick={()=>removeItem(product.item.id)}>Borrar Item</button>
                            </td>
                        </tr>))}
                    </tbody>
                </Table>
            <div>
                <p>Total : {totalPrice}</p>
                <button className="btn" onClick={clear}>Borrar todo</button>
            </div>
        </div>
    )
}

export default CartPage;


