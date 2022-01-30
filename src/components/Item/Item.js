import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card} from 'react-bootstrap';
import "./Item.css";


const Item = ({ItemListContainer}) => {

    return(

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ItemListContainer.img} />
        <Card.Body>
            <Card.Title>{ItemListContainer.name}</Card.Title>
            <Card.Text>$ {ItemListContainer.price}</Card.Text>
            <Button variant="primary">Detalles del producto</Button>
        </Card.Body>
    </Card>
    )
}

export default Item;



