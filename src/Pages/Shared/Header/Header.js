import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky='top'>
                <Container>
                    <img style={{ height: '50px' }} src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='fs-5 fw-normal' style={{ color: 'black' }} href="/">Home</Nav.Link>
                            <Nav.Link className='fs-5 fw-normal' style={{ color: 'black' }} href="#process">Process</Nav.Link>
                            <Nav.Link className='fs-5 fw-normal' style={{ color: 'black' }} href="/blog">Blog</Nav.Link>

                        </Nav>

                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to='item' className='fs-5 fw-normal' style={{ color: 'black' }}>Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to='manageitem' className='fs-5 fw-normal ' style={{ color: 'black' }}>My Item</Nav.Link>
                                    <Nav.Link as={Link} to='addItem' className='fs-5 fw-normal ' style={{ color: 'black' }}>Add Item</Nav.Link>
                                </>
                            }
                            {
                                user
                                    ?
                                    <button className='btn btn-link text-decoration-none text-white fs-5' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link as={Link} to='login' className='fs-5 fw-normal' style={{ color: 'black' }}>LogIn</Nav.Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;