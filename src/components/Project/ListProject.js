// ListProject.js
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import ProjectCard from "../ProjectCard/ProjectCard";
import CardGroup from "react-bootstrap/CardGroup";
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
      // <CardGroup className="xs-flex justify-content-around">
      //   {projects.map((project) => (
      //     <Row xs={4} className='test'>

      //       <ProjectCard project={project} />
      //     </Row>
      //   ))}
      // </CardGroup>

      <Container>
        <Row xs={4} className="test">
          {projects.map((project) => (
            <Col>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ListProject;
