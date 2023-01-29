import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="barnav me-auto">
                        <Link to="/home">Home</Link>
                        <Link to="featured">Featured</Link>
                        <Link to={'/products'}>Products</Link>
                        <Link to={'/manageItems'}>Manage Items</Link>
                        <Link to={'/about'}>About</Link>


                        {
                            user ? <button className='text-light' onClick={() => signOut(auth)}>LogOut</button> : <Link to={'/login'}>Login</Link>
                        }

                    </Nav>

                    <Nav>
                        <Link href="#deets">More deets</Link>
                        <Link eventKey={2} href="#memes">
                            Dank memes
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;