import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavigationBar.css'


function NavigationBar() {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand='sm' collapseOnSelect>
        <Navbar.Brand>
            WorldWideBooking
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
            <Nav>
                <NavDropdown title='Ingresar'>
                    <NavDropdown.Item href='/login' bg='dark' variant='dark'>Iniciar sesión</NavDropdown.Item>
                    <NavDropdown.Divider></NavDropdown.Divider>
                    <NavDropdown.Item href='/register' bg='dark' variant='dark'>Registrarse</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href='/login'>Iniciar sesión</Nav.Link>
                <Nav.Link href='/register'>Registrarse</Nav.Link>
                <Nav.Link href='/logout'>Cerrar sesión</Nav.Link>
                <Nav.Link href='/aboutus'>Quienes somos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
        

    </Navbar>
  )
}

export default NavigationBar