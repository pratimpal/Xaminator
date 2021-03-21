import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Logintab from "./logintab"
import Signintab from "./signintab"

function LoggingButton() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="secondary" onClick={handleShow}>
                Log-in
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Existing User Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Logintab   />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Log-in
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
}


function RegisterButton() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Sign-in
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>New User Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Signintab /> </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Sign-in
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
}

function Loginbar() {
    
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">exam 360</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Item>
                    <LoggingButton />
                </Nav.Item>
                <Nav.Item>
                    <RegisterButton />
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
  
export default Loginbar;
  