import React from "react";
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";

const ItemDetail = ({produ}) => {
    console.log(produ)
    return (
        <>
        <p> este de abajo es el itemDetail</p>     
       {
                     produ.map((produ) => <Card key={produ.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={produ.pictureUrl} />
                <Card.Body>
                    <Card.Title>{produ.title}</Card.Title>
                    <Card.Title> ${produ.price}</Card.Title>
                    <Card.Text>
                        {produ.description}
                    </Card.Text>
                    <Button variant="primary">Más detalles</Button>
                    <ItemCount initial={1} stock={10} text="Soy el texto de la prop" />
                </Card.Body>
            </Card>)
            }
        </>
    )}


export default ItemDetail