// IMPORTS - Requiero las librerias, componentes o lo que necesite arriba del todo

// COMPONENT - Desarrollo lo que necesito que haga mi componente

// EXPORT - Exportar el componente para poder utilizarlo en otras partes del código

import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href=""><Link to="/">FORTALEZA TIENDA</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to="/">Inicio </Link></Nav.Link> 
                    <Nav.Link><Link to="/quienessomos">¿Quiénes somos?</Link></Nav.Link>
                    <Nav.Link><Link to="/category/zapatillas">Zapatillas</Link></Nav.Link>
                    <Nav.Link><Link to="/category/remeras">Remeras</Link></Nav.Link>
                    <Nav.Link><Link to="/carrito"> Carrito</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}


export default NavBar