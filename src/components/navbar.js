import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navbar.css";
import { Routes, Route, Link } from "react-router-dom";
import Skills from "./skills";
function NavbarT() {
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Harsh Gupta
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/skills">
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/work-experience">
                Work Experience
              </Nav.Link>
              <Nav.Link as={Link} to="/education">
                Education
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarT;
