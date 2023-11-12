import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./SkillsRect.css";
import Skills from "../../pages/Skills";

function SkillsRect({ skill }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Test</Accordion.Header>
        <Accordion.Body>
          <> Did it for 5 years</>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Test</Accordion.Header>
        <Accordion.Body>
          <> 10 months experience</>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default SkillsRect;
