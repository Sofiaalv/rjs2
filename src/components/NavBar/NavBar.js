import 'bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../icons/CartWidget';
import "./NavBar.css"

function NavBar () {
    return (
          <Navbar className='Navbar'>
          <Container>
          <Link to="/" className='link' >ALSODECO</Link>
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
            </ul>
          </Nav>
          </Container>
        </Navbar>
    );
}

export default NavBar;