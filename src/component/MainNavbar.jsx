import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function MainNavbar() {
  return (
    <Navbar className="main-navbar" variant="dark">
      <Container>
        {/* Logo and Company Name on the Left */}
        <Navbar.Brand className="navbar-brand-text">
          {/* Replace './image/Troll Face.png' with the path to your logo image */}
          <img
            alt="Company Logo"
            src="./images/Troll Face.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Meme Generator
        </Navbar.Brand>

        {/* Text "React Project 3" on the Right */}
        <Navbar.Text className="ms-auto navbar-text">
          React Course - Project 3{" "}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
