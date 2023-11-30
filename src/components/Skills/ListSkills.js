import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsRect from "../SkillsRect/SkillsRect";
import Skills from "../../pages/Skills";

class ListSkills extends Component {
  state = {
    skills: [],
  };

  componentDidMount() {
    fetch("/Skills/Get")
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
      <Container>
        <Row>
          {/* {skills.map((skill) => (
              <Col>
                <SkillsRect skills={skills} />
                Test
              </Col>
            ))} */}
          <Col>
            <SkillsRect skills={skills} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ListSkills;
