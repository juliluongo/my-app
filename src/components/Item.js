import { Card, Button } from 'react-bootstrap';

const Item = ({ prod }) => {

    return (

        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.pictureUrl} />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Title> ${prod.price}</Card.Title>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                    <Button variant="primary">Más detalles</Button>
                </Card.Body>
            </Card>


        </>

    )

}

export default Item