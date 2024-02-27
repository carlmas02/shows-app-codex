import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Shows App</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
