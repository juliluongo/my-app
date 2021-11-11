import React from "react";
import { Card } from 'react-bootstrap';
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
//import {useContext} from 'react';
// import CartContext from "../context/CartContext";


const ItemDetail = ({produ}) => {

    //* const {cartList, mostrarListado} = useContext(CartContext) / defino el estado cartList con un useContext y le pasamos por parámetro a useContext el contexto que creamos
    const {cartList, mostrarListado, añadirAlCarrito} = useCartContext(); // para ahorrar el import de useContext y Cart context, creamos en el componente CartContext función useCartContext que directamente nos trae useContext(CartContext) ya hecho
    console.log(cartList);

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
                    <ItemCount initial={1} stock={10} produ={produ}/>
                </Card.Body>
            </Card>
            }
        </>
    )}


export default ItemDetail