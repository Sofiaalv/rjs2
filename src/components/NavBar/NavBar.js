import 'bootstrap';
import { Container, Nav, Navbar, Helpers , DropdownButton,NavDropdown,DropdownToggle, Dropdown, DropdownItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartWidget from '../icons/CartWidget';
import "./NavBar.css"

function NavBar () {
  const {cartQuantity} = useCartContext();

    return (
          <Navbar className='Navbar StickyTop'>
          <Container>
          <Link to="/" className='link' >ALSODECO</Link>
          <Nav className="me-auto">
            <ul className='fila'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className='Dropdown'>
                <Link to="/products" className="DropdownToggle" id="navbarDropdown" role="button"  data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/category/1" className="DropdownItem">Bazar</Link>
                  <Link to="/category/2" className="DropdownItem">Jardin</Link>
                  <Link to="/category/3" className="DropdownItem">Interior</Link>
                </ul>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <CartWidget/>
                <p>({cartQuantity})</p>
              </li>
            </ul>
          </Nav>
          </Container>
        </Navbar>
    );
}

export default NavBar;