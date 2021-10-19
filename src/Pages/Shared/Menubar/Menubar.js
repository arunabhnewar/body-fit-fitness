import React from 'react';
import './Menubar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Menubar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Body Fit</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="menu-items" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="menu-items" to="/home#program">Program</Nav.Link>
                        <Nav.Link as={HashLink} className="menu-items" to="/trainer">Trainer</Nav.Link>
                        <Nav.Link as={HashLink} className="menu-items" to="/blog">Blog</Nav.Link>

                        {!user?.email ? (
                            <>
                                <Nav.Link as={NavLink} to="/registration" className="menu-items">Sign Up</Nav.Link>

                                <Nav.Link as={NavLink} to="/login" className="menu-items">Sign In</Nav.Link>
                            </>
                        ) : (
                            <NavDropdown
                                title={
                                    <img
                                        style={{
                                            width: "50px",
                                            borderRadius: "50%",
                                        }}
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                }
                            >
                                <div className="text-center">
                                    <h6>{user?.displayName}</h6>
                                    <p className="m-0 mb-2">{user?.email}</p>
                                    <button onClick={logOut} className="btn btn-success">
                                        Sign Out
                                    </button>
                                </div>
                            </NavDropdown>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;
