// IMPORTS - Requiero las librerias, componentes o lo que necesite arriba del todo

// COMPONENT - Desarrollo lo que necesito que haga mi componente

// EXPORT - Exportar el componente para poder utilizarlo en otras partes del código

import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
                <Navbar bg="dark" variant="dark">
        <Container>
                <h2><Navbar.Brand href=""><Link class="link-light" to="/">FORTALEZA TIENDA</Link></Navbar.Brand></h2>
                <Nav className="me-auto">
                
                    <Nav.Link><Link class="nav-link active link-light" to="/">Inicio </Link></Nav.Link> 
                    <Nav.Link><Link class="nav-link active link-light" to="/quienessomos">¿Quiénes somos?</Link></Nav.Link>
                    <Nav.Link><Link class="nav-link active link-light" to="/category/zapatillas">Zapatillas</Link></Nav.Link>
                    <Nav.Link><Link class="nav-link active link-light" to="/category/remeras">Remeras</Link></Nav.Link>
                    <Nav.Link><Link class="nav-link disabled" to="/category/gorras">Gorras</Link></Nav.Link>
                    <Nav.Link><Link class="nav-link active link-light" to="/carrito"> Carrito</Link></Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>
   </> )
}


export default NavBar