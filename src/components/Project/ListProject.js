// ListProject.js
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import ProjectCard from "../ProjectCard/ProjectCard";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./ListProject.css";

class ListProject extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    fetch("/Project")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ projects: result });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { projects } = this.state;

    return (
      <Container className="container">
        <Row className="row">
          {projects.map((project) => (
            <Col className="centered">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ListProject;
