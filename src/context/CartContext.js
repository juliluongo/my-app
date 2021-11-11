import { createContext, useState, useContext } from "react";

const CartContext = createContext(); //creamos un context
export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => { // lo definimos

    const [cartList, setCartList] = useState([]) // creamos un useState con un array vacío para luego "inyectarlo" como prop mediante "value" y poder usarlo en otro lado

    
    const mostrarListado = () => { 
        console.log(cartList)
    }
    

    function añadirAlCarrito (items) { // creamos la funcion añadir al carrito y le pasamos la prop items
        setCartList([                  // seteamos adentro del set un nuevo array (ya que CartList es un array, el set tiene que ser un array si o si)
                                
            ...cartList,               // con los "..." todo lo que tiene adentro CartList lo pega en el nuevo array que estoy declarando + los items que es lo que hay que añadir
            items
        ])
    }


    return(
        <CartContext.Provider value={{
            cartList, 
        mostrarListado,
        añadirAlCarrito}}> 

            {children} 
        </CartContext.Provider>
    )
 // Linea 15: le inyectamos el estado CartList como value a nuestro contexto y también una función(mostrarListado). Todo esto para poder usarlo en otro lado
// Por convención, abajo van las funciones y arriba los estados
// la función mostrarListado y el estado CartList ya están listas para usarse en otro componente
// Linea 17: Adentro de ese "children" estan todos los children del CartContextProvider del app
}

export default CartContextProvider