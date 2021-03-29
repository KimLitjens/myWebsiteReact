import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap'

export function HeaderContainer({ children }) {
    return (
        <Navbar bg="light" expand="false">
            <Navbar.Brand href="#home">Kim Litjens</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#whatIDo">What I Do</Nav.Link>
                    <Nav.Link href="#aboutMe">About Me</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}