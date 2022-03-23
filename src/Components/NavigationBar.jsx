import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Button, Container} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './NavigationBar.css'

export default function NavigationBar() {
  const navigate = useNavigate();

  const HandleLogin = () => {
    navigate('/login')
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
          <Button className="d-flex" onClick={HandleLogin}>
            Log in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
