
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
//import Button from 'react-bootstrap/Button';

function Appnavbar() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">exam 360</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#exams">Exams</Nav.Link>
            <Nav.Link href="#results">Results</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
export default Appnavbar;
  