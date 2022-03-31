import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import './NavigationBar.css'
import { useNavigate } from "react-router-dom";


function NavigationBar() {
    const user = localStorage.getItem('user')
    const navigate = useNavigate();

    const HandleLogin = () => {
        navigate('/login')
      }
    const HandleProfile = () => {
        navigate('/profile/' + user)
      }

    return (
        <Navbar bg="dark" variant='dark' sticky='top' expand='lg' collapseOnSelect>
            <Container fluid>
                <Navbar.Brand href="/">World Wide Booking</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                    </Nav>
                    {!user && <Button className="d-flex btn-navbar" onClick={HandleLogin}>
                        Log in
                    </Button> }
                    {user && <Button className="d-flex btn-navbar" onClick={HandleProfile}>
                        {user}
                    </Button> }

                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar