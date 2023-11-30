// ListProject.js
import React, { Component, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import ProjectCard from "../ProjectCard/ProjectCard";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./ListProject.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ListProject({ props }) {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // const { projects } = this.state;

<<<<<<< HEAD
  componentDidMount() {
    fetch("/Project")
=======
  useEffect(() => {
    fetch("/Project/Get")
>>>>>>> d2ee1d1d34842320a4322c355677405a5a46db74
      .then((res) => res.json())
      .then((result) => {
        this.setState({ projects: result });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Add Project
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add new project</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group controlId="newproject">
              <FloatingLabel name="projectname" label="Name" className="mb-3">
                <Form.Control type="text" placeholder="Project Name" />
              </FloatingLabel>

              <FloatingLabel
                name="projectdescription"
                label="Name"
                className="mb-3"
              >
                <Form.Control as="textarea" rows={3} />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <Form.Select aria-label="Default select">
                <option>Skills</option>
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">Java</option>
                <option value="4">DotNet</option>
                <option value="5">Abap</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <Container className="container">
        <Row className="row">
          {projects.map((project) => (
            <Col className="centered">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ListProject;
