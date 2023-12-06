import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import "../components/NavBar/NavBar.css";
import "./Auth.css";

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
    setShow(false);
  };

  const handleLogout = async (e) => {
    setSuccess(false);
    setShow(false);
  };

  const [credentials, setCredentialsInfos] = useState({ Email: "", Pwd: "" });
  function changeCredentialsProperties(e) {
    console.log(credentials);
    console.log(credentials.Email);
    console.log(credentials.Pwd);
    setCredentialsInfos({
      ...credentials,
      [e.target.controlId]: e.target.value,
    });
  }

  return (
    <>
      {success ? (
        <>
          <a className="link-hoverable" id="underline" onClick={handleShow}>
            Logout
          </a>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="Modal-header">
              <Modal.Title className="modal-title">
                Do you really want to logout?
              </Modal.Title>{" "}
            </Modal.Header>
            <Modal.Body className="Modal-body_logout">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <>
          <a onClick={handleShow} className="link-hoverable">
            Sign In
          </a>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="Modal-header">
              <Modal.Title className="modal-title">Sign In</Modal.Title>{" "}
            </Modal.Header>
            <Modal.Body className="Modal-body_login">
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
                      onChange={(e) => (credentials.Email = e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    name="password"
                    controlId="Pwd"
                    label="Password"
                    value={credentials.Pwd}
                    onChange={(e) => (credentials.Pwd = e.target.value)}
                  >
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="Modal-footer">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}

export default Auth;
