import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Auth from "../../pages/Auth";
import "./NavBar.css";

function NavBar() {
  console.log(window.location);
  return (
    // <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="">
    //   <Container>
    //     <Navbar.Brand href="/home" >Portfolio</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/projects">Projects</Nav.Link>
    //         <Nav.Link href="/skills">Skills</Nav.Link>
    //         <Auth className="justify-content-end" />
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Container className="menuholder">
      <NavBar className="tomenuholder">
        <Nav className="tomenu-hoverable">
          <Nav.Link href="/projects" className=""></Nav.Link>
        </Nav>
      </NavBar>
    </Container>
  );
}
export default NavBar;
