import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiHomeAlt, BiSearch, BiWallet } from "react-icons/bi";

export default function App() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
          <BiWallet size={28} className="me-2 text-warning" />
          Ummag Finance Investment
        </Navbar.Brand>

        {/* Mobile toggler */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar links */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home" className="d-flex align-items-center">
              <BiHomeAlt className="me-1" /> Home
            </Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>

            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#investments">
                Investments
              </NavDropdown.Item>
              <NavDropdown.Item href="#rdplans">RD Plans</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
            </NavDropdown>

            
            
            
          </Nav>

          {/* Search bar */}
          <Form className="d-flex" role="search">
            <Form.Control
              type="search"
              placeholder="Search ..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning" className="d-flex align-items-center">
              <BiSearch className="me-1" />
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}





































































