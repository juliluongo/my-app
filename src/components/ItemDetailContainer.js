import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import './ItemDetailContainer.css';

const producto = [

    { id: "1", title: 'AIR 270', category:"zapatillas", description: "Zapatilla negra con blanco", price: 12000, pictureUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw725c6174/products/NI_AH6789-012/NI_AH6789-012-1.JPG' },
    { id: "2", title: 'Airmax 90', category:"zapatillas", description: "Zapatilla negra", price: 10000, pictureUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dweafdb880/products/NI_AQ2568-003/NI_AQ2568-003-1.JPG' },
    { id: "3", title: 'Puma RSX', category:"zapatillas", description: "Zapatilla multicolor", price: 15000, pictureUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw39ff2754/products/PU_372117-02/PU_372117-02-1.JPG' },
    { id: "4", title: 'Converse All-Star', category:"zapatillas", description: "Zapatilla negras con blanco", price: 8000, pictureUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7aee245b/products/CO_169955C/CO_169955C-1.JPG' },
    { id: "5", title: 'Remera Nike', category:"remeras", description: "La Remera Nike Sportswear Icon está confeccionada con tela tejida suave y cómoda apta para que lleves un look casual todos los días. El pequeño estampado dibujado a mano aporta originalidad y un estilo urbano a una prenda clásica de la marca", price: 3000, pictureUrl: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0cd54800/products/NI_BV5631-010/NI_BV5631-010-1.JPG' },
    { id: "6", title: 'Remera Adidas', category:"remeras", description: "Llevar un estilo casual no es nada difícil, ponele onda a tus outfits con la Remera adidas Adicolor Trefoil su material la hace suave al tacto, su logo estampado del trifolio representa la historia deportiva que te da un look clasico característico de la marca; la podés combinar fácilmente con tus joggers o jeans favoritos para que proyectes esa imagen canchera que siempre llevás.", price: 3100, pictureUrl: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwffb516db/products/AD_GV5237/AD_GV5237-1.JPG' },
    { id: "7", title: 'Remera Puma', category:"remeras", description: "Esta remera Puma es una prenda sencilla que te mantiene cómoda gracias a su tejido suave y liviano de algodón.", price: 2800, pictureUrl: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw71303718/products/PU_845895-01/PU_845895-01-1.JPG' },

];


const getItem = new Promise((resolve, reject) => { // Creamos nuestra nueva promesa

    setTimeout(() => {
        resolve(producto)  // La damos como resuelta dando como resultado "Productos", y un timeout de 2 segundos
    }, 2000)
})

const ItemDetailContainer = () => {

    const [produ, setProdu] = useState([]); // Le damos un estado a nuestra variable "Product"

    const {id} = useParams()

    useEffect(() => {
        getItem
            .then(res => {   
                setProdu(res.find(prod => prod.id === id)) 
            })

            .catch(err => console.log(err)) // SI CUALQUIER ERROR SUCEDE, el catch lo detectará y mostrará el error en consola sin romper la página
            .finally(() => console.log('esto se ejecuta cuando termina el ItemDetailContainer')) // Por último, el método finally se muestra SIEMPRE QUE LA PROMESA TERMINA
    }, [id] );

    console.log(produ)
    return (
        
        <section class="section-content">
        <div class="container">
            <header class="section-heading">
                <h3 class="section-title"> Productos </h3>
                </header>
                <div class="row">
                     <ItemDetail produ={produ} />
                 </div>
             </div>
        </section>

        
        

    )

}

export default ItemDetailContainer