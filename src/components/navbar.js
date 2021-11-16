import React from "react";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import "./navbar.css";
import { Routes, Route, Link } from "react-router-dom";
import Skills from "./skills";
function NavbarT() {
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <NavItem>
              <Navbar.Brand as={Link} to="/">
                Harsh Gupta
              </Navbar.Brand>
            </NavItem>
            <Nav className="me-auto">
              <NavItem>
                <Nav.Link as={Link} to="/skills">
                  Skills
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/work-experience">
                  Work Experience
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/education">
                  Education
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/projects">
                  Projects
                </Nav.Link>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarT;
