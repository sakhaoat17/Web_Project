import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap';
import './SecondNav.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Container,Form,Button } from 'react-bootstrap'
export default function SecondNav() {
  return (
    <Navbar bg='mycolor' variant='dark' sticky='top' expand='md' collapseOnSelect>
      <Container fluid>
      <NavbarBrand className='brand' href='#'>
        <img src={logo} alt="Logo" width="40px" height="40px"/>
        Logo
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/cox" >Cox's Bazar</NavDropdown.Item>
            <NavDropdown.Item href='#'>Apple</NavDropdown.Item>
            <NavDropdown.Item href='#'>Banana</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#'>Orange</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link href='#'>Contact</Nav.Link>
        </Nav>
        <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
