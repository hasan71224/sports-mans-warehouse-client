import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../Images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                    <img style={{height: '50px'}} src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='fs-5 fw-normal' style={{color:'black'}} href="/">Home</Nav.Link>
                            <Nav.Link className='fs-5 fw-normal' style={{color:'black'}} href="#process">Process</Nav.Link>
                            <Nav.Link className='fs-5 fw-normal' style={{color:'black'}} href="/blog">Blog</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link className='fs-5 fw-normal' style={{color:'black'}} href="/login">Login</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;