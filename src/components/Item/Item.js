import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Item.css";


const Item = ({product}) => {
    const navigate = useNavigate();

    return(
        
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>$ {product.price}</Card.Text>
            <Button onClick={()=> navigate(`/products/${product.id}`)}>
                Detalles del producto
            </Button>
        </Card.Body>
    </Card>
    )
} 

export default Item;



