import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar
                    bg="primary"
                    variant="dark"
                    className="fixed-top"
                    expand="lg"
                >
                    <Container>
                        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                        <Link className="text-decoration-none p-2 text-white" to="/home">Home</Link>
                    {user?.email &&
                        <div className="d-flex ">
                        <Link className="text-decoration-none p-2 text-white" to="/addpackage">Add Package</Link>
                        <Link className="text-decoration-none p-2 text-white" to="/mypackages">My Package</Link>
                        <Link className="text-decoration-none p-2 text-white" to="/managepackages">Manage Package</Link>
                        <Link className="text-decoration-none p-2 text-white"  to="*">Discount</Link>
                        </div>
                    }
                    {user?.email?(
                        <Button onClick={logOut} variant="danger">
                        LogOut <i className="fas fa-sign-out-alt"></i>
                        </Button>
                    ): (
                        <Link className="text-decoration-none p-2 text-white" to="/login">Log in </Link>
                    )}
                    {user?.email &&
                        <p className="text-white m-2">sign in as: {user?.displayName}</p>
                    }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    )
};

export default Header;