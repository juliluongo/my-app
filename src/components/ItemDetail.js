import React from "react";
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";


const ItemDetail = ({produ}) => {
    console.log(produ)
    return (
        <>
        
       {
                     <Card key={produ.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={produ.pictureUrl} />
                <Card.Body>
                    <Card.Title>{produ.title}</Card.Title>
                    <Card.Title> ${produ.price}</Card.Title>
                    <Card.Text>
                        {produ.description}
                    </Card.Text>
                    <button class="btn btn-outline-info">Más detalles</button>
                    <ItemCount initial={1} stock={10} text="Soy el texto de la prop" />
                </Card.Body>
            </Card>
            }
        </>
    )}


export default ItemDetail