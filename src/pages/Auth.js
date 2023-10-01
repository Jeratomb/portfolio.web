import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Auth() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link onClick={handleShow}>Sign In</Nav.Link>
      </Navbar.Collapse>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="Modal">
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal">
          <Form>
            <Form.Group controlId="Auth.ControlInput1">
              <Form.Label>Login</Form.Label>
              <Form.Control className="Textbox"
                type="email"
                placeholder="Email"
                autoFocus
              />
              <Form.Control className="Textbox" type="password" placeholder="Your password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="Modal">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Auth;
