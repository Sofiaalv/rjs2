import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card} from 'react-bootstrap';
import "./Item.css";


const Item = ({producto}) => {

    return(

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>$ {producto.price}</Card.Text>
            <Button variant="primary">Detalles del producto</Button>
        </Card.Body>
    </Card>
    )
}

export default Item;



