import 'bootstrap';
import CartWidget from '../icons/CartWidget';
import "./NavBar.css"

function NavBar () {
    return (

        <container className="fondo ">
        <div>
            <h2 style={{ color: "black"}} href="#home">Alsodeco</h2>
            <ul className='fila'>
                <button className="btn" href="#home">Home</button>
                <button className="btn" href="#features">Catalogo</button>
                <CartWidget/>
            </ul>
        </div>
        </container>  
    );
}

export default NavBar;