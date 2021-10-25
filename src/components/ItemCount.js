import React, { useState } from "react";

const ItemCount = ({ initial, stock, text }) => {
    // Tengo un número máximo (STOCK) - Valor indicador para saber hasta cuando sumar
    // Tengo un número mínimo (1) - valor indicador para saber hasta cuando restar


    const [qty, setQty] = useState(initial)

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
        if (stock != 0) {
            (qty === 1) ? alert(message) : alert(message + 's')
        }
    }

    return (

        <div>
            <div>
                <button onClick={onDecrease} > - </button>
                <div>{qty}</div>
                <button onClick={onIncrease} > + </button>
            </div>
            <button onClick={onAdd} > Agregar al carro </button>
        </div>
    )
}

export default ItemCount