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
              <Navbar.Brand href="https://harshgupta.live">
                Harsh Gupta
              </Navbar.Brand>
            </NavItem>
            <Nav className="me-auto">
              <NavItem>
                <Nav.Link href="https://leetcode.com/harshhx/">
                  LeetCode
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="https://www.linkedin.com/in/harshhx/">
                  linkedin
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="https://github.com/harshhx">github</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="mailto:hg070401@gmail.com">Email Me</Nav.Link>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarT;
