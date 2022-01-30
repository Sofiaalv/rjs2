import 'bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from '../icons/CartWidget';
import "./NavBar.css"

function NavBar () {
    return (
          <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Alsodeco</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Catalogo</Nav.Link>
            <CartWidget/>
          </Nav>
          </Container>
        </Navbar>
    );
}

export default NavBar;