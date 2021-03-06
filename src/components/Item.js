import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Item.css';

const Item = ({ prod }) => {

    return (

        <div class="col-md-3">
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" class="img-wrap" src={prod.pictureUrl} />
                <Card.Body class="info-wrap">
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Title> ${prod.price}</Card.Title>
                    
                   <Link to={`/category/item/${prod.id}`}> <button class="btn btn-outline-info">Más detalles</button></Link>
                   </Card.Body>
                   <Card.Body class="info-wrap">
                   
                </Card.Body>
                
            </Card>
       

        </div>

    )

}

export default Item