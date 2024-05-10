import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap';
import './SecondNav.css';
import logo1 from '../images/cover.png';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function SecondNav() {
  const userId = window.localStorage.getItem('userId');
  const navigate = useNavigate();

  const Logout = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("userId");
    navigate('/'); // Corrected to 'navigate'
  }

  return (
    <Navbar bg='mycolor' variant='dark' sticky='top' expand='md' collapseOnSelect>
      <Container fluid>
        <NavbarBrand className='brand' href='#'>
          <img src={logo1} alt="Logo" height="60px" width="180px" />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cox">Cox's Bazar</NavDropdown.Item>
              <NavDropdown.Item href='#'>Apple</NavDropdown.Item>
              <NavDropdown.Item href='#'>Banana</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#'>Orange</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {userId ? (
              <>
                <Nav.Link as={Link} to={`/profile/${userId}`}>Profile</Nav.Link>
               
              </>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
            <Nav.Link as={Link} to="/">Contact Us</Nav.Link>
            {userId && (
              <Button variant="outline-primary" onClick={() => Logout()}>Sign Out</Button>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ marginRight: '50px', paddingLeft: '30px', paddingRight: '30px' }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
