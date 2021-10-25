import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import "./navbar.css"
function NavbarT() {
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand href="#home">Harsh Gupta</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Skills</Nav.Link>
          <Nav.Link href="#features">Work Experience</Nav.Link>
          <Nav.Link href="#pricing">Education</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarT