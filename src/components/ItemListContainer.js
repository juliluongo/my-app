import React, { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import './ItemListContainer.css';

const productos = [

    { id: 1, title: 'AIR 270', category:"zapatillas", description: "Zapatilla negra con blanco", price: 12000, pictureUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw725c6174/products/NI_AH6789-012/NI_AH6789-012-1.JPG' },
    { id: 2, title: 'Airmax 90', category:"zapatillas", description: "Zapatilla negra", price: 10000, pictureUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dweafdb880/products/NI_AQ2568-003/NI_AQ2568-003-1.JPG' },
    { id: 3, title: 'Puma RSX', category:"zapatillas", description: "Zapatilla multicolor", price: 15000, pictureUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw39ff2754/products/PU_372117-02/PU_372117-02-1.JPG' },
    { id: 4, title: 'Converse All-Star', category:"zapatillas", description: "Zapatilla negras con blanco", price: 8000, pictureUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7aee245b/products/CO_169955C/CO_169955C-1.JPG' },
    { id: 5, title: 'Remera Nike', category:"remeras", description: "Remera de algodón Nike", price: 3000, pictureUrl: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0cd54800/products/NI_BV5631-010/NI_BV5631-010-1.JPG' },
    { id: 6, title: 'Remera Adidas', category:"remeras", description: "Remera de algodón Adidas", price: 3100, pictureUrl: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwffb516db/products/AD_GV5237/AD_GV5237-1.JPG' },
    { id: 7, title: 'Remera Puma', category:"remeras", description: "Remera de algodón Puma", price: 2800, pictureUrl: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw71303718/products/PU_845895-01/PU_845895-01-1.JPG' },

];

const getFetch = new Promise((resolve, reject) => { // Creamos nuestra nueva promesa

    setTimeout(() => {
        resolve(productos)  // La damos como resuelta dando como resultado "Productos", y un timeout de 2 segundos
    }, 2000)
})


const ItemListContainer = () => {

    const [product, setProduct] = useState([]); // Le damos un estado a nuestra variable "Product"

    const {id} = useParams()

    useEffect(() => {
     if (id) { // si la condición es correcta
         
        getFetch
        .then(res => { 
            setProduct(res.filter(prod => prod.category === id)) // seteame mi variable "Product" con el array creado por filter filtrando el id de la categoría de los productos
        })
        .catch(err => console.log(err))
        .finally(() => console.log('esto se ejecuta si o si cuando termina el ItemListContainer'))

     } else {
         
            getFetch
            .then(res => {   // Entonces: si la respuesta es correcta
                // console.log(res) // Mostrame en consola la respuesta(productos)
                setProduct(res) // Y además, seteame mi variable "Product" con esa respuesta
            })
            
            .catch(err => console.log(err)) // SI CUALQUIER ERROR SUCEDE, el catch lo detectará y mostrará el error en consola sin romper la página
            .finally(() => console.log('esto se ejecuta si o si cuando termina el ItemListContainer')) // Por último, el método finally se muestra SIEMPRE QUE LA PROMESA TERMINA
        }
    }, [id]);

console.log(id)

    return (
        <section class="section-content">
             <div class="container">
                 <header class="section-heading">
                     <h3 class="section-title"> Productos </h3>
                     </header>
                     <div class="row">
                 <ItemList product={product} />
                 </div>
             </div>
        </section>

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

    //  La constante getUsers es una función que le está indicando al método, que tiene que ser asincrónico
    // const getUsers = async () => {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/users') // Le pedimos a esta función asicncrónica que espere a que se resuelva fetcheo de información 
    // de la dirección url y cuando eso se resuelva, se va a guardar en data

    //     const dataUsers = await data.json()
    //     setUsers(dataUsers)


    // }

    //le pido que ejecute la función getUser y que demore 2 segundos en mostrar la información
    // useEffect(() => {

    //     setTimeout(() => getUsers(), 2000)
    // }, [])

