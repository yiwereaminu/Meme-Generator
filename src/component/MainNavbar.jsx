import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function MainNavbar() {
  return (
    <Navbar className="main-navbar">
      <Container>
        <img
          alt=""
          src="./images/Troll Face.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <Navbar.Brand href="#home"> Meme Generator</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>React Course - Project 3</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
