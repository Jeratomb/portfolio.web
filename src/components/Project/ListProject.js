// ListProject.js
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../ProjectCard/ProjectCard'; 
import Footer from "../Footer/Footer";

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
      <Container>
        <Row>
          {projects.map((project) => (
            <Col xs={3} key={project.id}>
              <ProjectCard project={project} /> 
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ListProject;
