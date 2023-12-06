import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsRect from "../SkillsRect/SkillsRect";

class ListSkills extends Component {
  state = {
    skills: [],
  };

  componentDidMount() {
    fetch("/Skill")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ skills: result });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { skills } = this.state;

    return (
      <Container className="container">
        <Row className="row">
          {skills.map((skill) => (
            <>
              {console.log(skill)}
              <Col className="centered">
                <SkillsRect skills={skill} />
              </Col>
            </>
          ))}
        </Row>
      </Container>
    );
  }
}
export default ListSkills;
