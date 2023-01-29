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
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                            user ? <button className='text-light m-2 p-2 border' onClick={() => signOut(auth)}>LogOut</button> : <Link to={'/login'}>Login</Link>
                        }

                        {
                            user && <>
                                <Nav.Link as={Link} to="addCycle" className='text-light'>Add Cycle</Nav.Link>
                                <Nav.Link as={Link} to="deleteProducts" className='text-light'>Manage Cycle</Nav.Link>


                            </>
                        }

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;