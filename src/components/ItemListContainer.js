import React, { Fragment, useEffect, useState } from "react"
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productos = [

    { id: 1, title: 'Run Falcon', description: "Zapatilla negra con blanco", price: 12000, pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg' },
    { id: 2, title: 'Airmax 90', description: "Zapatilla negra", price: 10000, pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg' },
    { id: 3, title: 'Puma RSX', description: "Zapatilla multicolor", price: 15000, pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg' },
    { id: 4, title: 'Converse All-Star', description: "Zapatilla beige", price: 8000, pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg' }

];


const getFetch = new Promise((resolve, reject) => { // Creamos nuestra nueva promesa

    setTimeout(() => {
        resolve(productos)  // La damos como resuelta dando como resultado "Productos", y un timeout de 2 segundos
    }, 2000)
})

const ItemListContainer = () => {

    const [product, setProduct] = useState([]); // Le damos un estado a nuestra variable "Product"

    getFetch
        .then(res => {   // Entonces: si la respuesta es correcta
            // console.log(res) // Mostrame en consola la respuesta(productos)
            setProduct(res) // Y además, seteame mi variable "Product" con esa respuesta
        })

        .catch(err => console.log(err)) // SI CUALQUIER ERROR SUCEDE, el catch lo detectará y mostrará el error en consola sin romper la página
        .finally(() => console.log('esto se ejecuta si o si cuando termina')) // Por último, el método finally se muestra SIEMPRE QUE LA PROMESA TERMINA

    console.log(product)

    return (
        <Fragment>
            <ItemCount initial={1} stock={10} text="Soy el texto de la prop" />
            <ItemList />


            {
                product.map((prod) => <Card key={prod.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prod.pictureUrl} />
                    <Card.Body>
                        <Card.Title>{prod.title}</Card.Title>
                        <Card.Text>
                            {prod.description}
                        </Card.Text>
                        <Button variant="primary">Más detalles</Button>
                    </Card.Body>
                </Card>)

            }

        </Fragment>

    )

}
export default ItemListContainer


// por último, mapeamos el array pero dentro de una card y nos queda la card armada y dinámica




// Con el método map, recorremos el array "Product" (ya que ahora tenemos nuestros productos ahí dentro) y nos devuelve un nuevo array ordenado según el id de los objetos dentro
// En este caso, pedimos que nos muestre SOLO el parámetro "title" en distintos h2

 // {
    //    product.map((prod) => <h2 key={prod.id}>  {prod.title} </h2>)

    //}





    // const [users, setUsers] = useState([])

    // // La constante getUsers es una función que le está indicando al método, que tiene que ser asincrónico
    // const getUsers = async () => {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/users') // Le pedimos a esta función asicncrónica que espere a que se resuelva fetcheo de información 
    //     // de la dirección url y cuando eso se resuelva, se va a guardar en data

    //     const dataUsers = await data.json()
    //     setUsers(dataUsers)


    // }

    // //le pido que ejecute la función getUser y que demore 2 segundos en mostrar la información
    // useEffect(() => {

    //     setTimeout(() => getUsers(), 2000)
    // }, [])

