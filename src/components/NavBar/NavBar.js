import 'bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartWidget from '../icons/CartWidget';
import "./NavBar.css"

function NavBar () {
  const {cartQuantity} = useCartContext();

    return (
      <Navbar className='Navbar StickyTop'>
        <Link to="/" className='link' >ALSODECO</Link>
          <Container>
          <Nav className="me-auto">
            <ul className='fila'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Productos</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <CartWidget/>
              </li>
              <li>
                <p>({cartQuantity})</p>
              </li>
            </ul>
          </Nav>
          </Container>
        </Navbar>
    );
}

export default NavBar;