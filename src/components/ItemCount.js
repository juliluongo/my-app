import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';

const ItemCount = ({ initial, stock, text }) => {
    // Tengo un número máximo (STOCK) - Valor indicador para saber hasta cuando sumar
    // Tengo un número mínimo (1) - valor indicador para saber hasta cuando restar
    const [qty, setQty] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(false)


    const onIncrease = () => {
        const newValue = qty + 1
        if (newValue <= stock) {
            setQty(newValue)
        }

    }

    const onDecrease = () => {
        const newValue = qty - 1
        if (initial <= newValue) {
            setQty(newValue)
        }

    }

    const onAdd = () => {
        const message = `Agregaste ${qty} producto`
        setQty(initial)
        setCambiarBoton(true)
        if (stock !== 0) {
            (qty === 1) ? alert(message) : alert(message + 's')
        }
    }

    return (

        <div>
            <div>
                <button class="btn btn-outline-dark btn-sm"  onClick={onDecrease} > - </button>
                { qty }
                <button class="btn btn-outline-dark btn-sm"  onClick={onIncrease} > + </button>
           

{cambiarBoton 

? <Link to='/carrito'><button class="btn btn-outline-dark btn-sm"> Terminar compra </button></Link>

: <button class="btn btn-outline-dark btn-sm" onClick={onAdd} > Agregar al carro </button>}

           
            
            </div>
        </div>
    )
}

export default ItemCount