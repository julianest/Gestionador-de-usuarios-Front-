import {Container, Nav, Navbar} from 'react-bootstrap';
import logoIcon from "../Img/PwC-logo.svg";
import "../styles/App.css"

function NavbarP() {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/home"><img src={logoIcon} alt="Logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container fluid >
          <Nav className="me-auto positionNav">
            <Nav.Link href="/home">Registrar</Nav.Link>
            <Nav.Link href="/Clientes">Clientes</Nav.Link>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarP;