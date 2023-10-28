// ListProject.js
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../ProjectCard/ProjectCard'; 
import Footer from "../Footer/Footer";
import CardGroup from 'react-bootstrap/CardGroup';
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

        <CardGroup className="xs-flex justify-content-around">
          {projects.map((project) => (
            <Row xs={4}>

              <ProjectCard project={project} /> 
            </Row>
          ))}
        </CardGroup>

    );
  }
}

export default ListProject;
