import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./FurnitureNavbar.module.sass"

function FurnitureNavbar() {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">MUPSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">MUPSA</Nav.Link>
            <Nav.Link href="/catalogo">Catalogo</Nav.Link>
            <Nav.Link href="/quienesSomos">Quienes somos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FurnitureNavbar;