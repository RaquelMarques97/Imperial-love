import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">IMPERIAL SPARK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#my-profile">My profile</Nav.Link>
                    <Nav.Link href="#my-preferences">Your Preferences</Nav.Link>
                    <Nav.Link href="#match">Find a Match</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavBar;