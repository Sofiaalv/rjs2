import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"

function NavBar () {
    return (

        <container className="fondo ">
        <div className='fila'>
            <h2 style={{ color: "pink"}} href="#home">Alsodeco</h2>
            <ul>
                <button className="btn" href="#home">Home</button>
                <button className="btn" href="#features">Catalogo</button>
                <button className="btn" href="#chart">Carrito</button>
            </ul>
        </div>
        </container>  
    );
}

export default NavBar;