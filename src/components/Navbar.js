// IMPORTS - Requiero las librerias, componentes o lo que necesite arriba del todo

// COMPONENT - Desarrollo lo que necesito que haga mi componente

// EXPORT - Exportar el componente para poder utilizarlo en otras partes del código

import { Navbar, Container, Nav } from 'react-bootstrap';
import imagenes from "./imagenes"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">FORTALEZA TIENDA</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">¿Quiénes somos?</Nav.Link>
                    <img src={imagenes.img1} alt="imagen" class="img-fluid" width="5%" />
                </Nav>
            </Container>
        </Navbar>
    )
}


export default NavBar