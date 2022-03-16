import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import styles from './NavigationBar.module.css'

export default function NavigationBar() {
  return (
    <Navbar bg = "dark" variant='dark' sticky='top' expand ='lg' collapseOnSelect>
        <Navbar.Brand>
            <img className = {styles.navBarLogo} src = 'https://logowik.com/content/uploads/images/free-letter-n-logo-template3672.jpg'/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/aboutus'>Quienes somos</Nav.Link>
                <Nav.Link href='contactus'>Contáctanos</Nav.Link>
                <Nav.Link href='login'>Iniciar sesión</Nav.Link>
                <Nav.Link href = 'signup'>Registrarse</Nav.Link>
                <Nav.Link href = 'logout'>Cerrar sesión</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
