import Item from "./Item"


const ItemList = (props) => {

    //acá mapeamos la info
    // El map me genera los items enviandole las props

    return (
        <div>

            <h3>Soy el ItemList</h3>

            <Item />


        </div>
        // Llamamos a Item y le pasamos las props
        // <Item id={id} username={username} city={city} email={email}
    )
}

export default ItemList