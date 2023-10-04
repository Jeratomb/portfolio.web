import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Alert from "react-bootstrap/Alert";

function Auth() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    console.log(credentials);
    console.log(credentials.Email);
    console.log(credentials.Pwd);
    setSuccess(true);
    setShow(true);
  };

  const [credentials, setCredentialsInfos] = useState({ Email: '', Pwd: '' });
  function changeCredentialsProperties(e) {
    console.log(credentials);
    console.log(credentials.Email);
    console.log(credentials.Pwd);
    setCredentialsInfos({ ...credentials, [e.target.controlId]: e.target.value });
  }

  return (
    <>
      {success ? (
        <section>
          <Nav key='success' variant='success'>
           <Nav.Link>Signed in as: {credentials.Email}</Nav.Link> 
          </Nav>
        </section>
      ) : (
        <div>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link onClick={handleShow}>Sign In</Nav.Link>
          </Navbar.Collapse>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="Modal">
              <Modal.Title>Sign In</Modal.Title>{" "}
            </Modal.Header>
            <Modal.Body className="Modal">
              <Form>
                <Form.Group controlId="Auth.Email">
                  <FloatingLabel
                    name="Email"
                    controlId="Email"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) => credentials.Email = e.target.value}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    name="password"
                    controlId="Pwd"
                    label="Password"
                    value={credentials.Pwd}
                    onChange={(e) =>  credentials.Pwd = e.target.value}
                  >
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="Modal">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
}

export default Auth;
