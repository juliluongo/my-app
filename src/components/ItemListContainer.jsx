import React, { Fragment } from "react"
import ItemCount from "./ItemCount";

const Saludo = (props) => {
    return (
        <Fragment>
            <h2>Hola {props.persona}! Bienvenido a nuestra página web!</h2>

            <ItemCount initial={1} stock={10} text="Soy el texto de la prop" />
        </Fragment>

    )

}

export default Saludo