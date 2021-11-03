import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import React from "react";

const producto = [

    { id: 1, title: 'Medias Jordan', description: "Medias 3/4 estirables de lana", price: 3000, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_693717-MLA28996560691_122018-O.jpg' }

];


const getItem = new Promise((resolve, reject) => { // Creamos nuestra nueva promesa

    setTimeout(() => {
        resolve(producto)  // La damos como resuelta dando como resultado "Productos", y un timeout de 2 segundos
    }, 2000)
})


const ItemDetailContainer = () => {

    const [produ, setProdu] = useState([]); // Le damos un estado a nuestra variable "Product"

    useEffect(() => {
        getItem
            .then(res => {   // Entonces: si la respuesta es correcta
                // console.log(res) // Mostrame en consola la respuesta(productos)
                setProdu(res) // Y además, seteame mi variable "Product" con esa respuesta
            })

            .catch(err => console.log(err)) // SI CUALQUIER ERROR SUCEDE, el catch lo detectará y mostrará el error en consola sin romper la página
            .finally(() => console.log('esto se ejecuta cuando termina el ItemDetailContainer')) // Por último, el método finally se muestra SIEMPRE QUE LA PROMESA TERMINA
    }, [] );

    return (
        <>
        <ItemDetail produ={produ} />
        </>

    )

}

export default ItemDetailContainer