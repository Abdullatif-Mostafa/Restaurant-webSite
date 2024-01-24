import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar className='Navbar' expand="lg" style={{position:"fixed"}}>
      <Container>
        <Navbar.Brand href="#home">
                <img src='logo.png' alt=''></img>
        </Navbar.Brand>  
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Explore Foods</Nav.Link>
            <Nav.Link href="#link">Review</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">01213435465</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;