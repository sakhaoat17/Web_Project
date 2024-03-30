import React, { Component } from 'react'
import { Navbar,Nav,Container,NavDropdown,Form,Button } from 'react-bootstrap'
import {
    BrowserRouter,
    createBrowserRouter,
    Link,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";

import './navbar.css'
export class NavBar extends Component {
  render() {
    return (
        
        <div>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/buy">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
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
      <div>
       
      </div>
      </div>
      
    )
  }
}

export default NavBar