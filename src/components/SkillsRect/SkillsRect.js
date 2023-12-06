import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./SkillsRect.css";

function SkillsRect({ skill }) {
  console.log("Skill object:", skill);
  let expText = "Default";

  try {
    expText = handleScaleText(skill._scale);
  } catch (error) {
    console.error("Fehler beim Zugriff auf _scale:", error);
  }
  function handleScaleText(scale) {
    switch (scale) {
      case 0:
        return "Advanced";
      case 1:
        return "Intermediate";
      case 2:
        return "Beginner";
      case 3:
        return "Hear about it";
      default:
        return "default";
    }
  }

  return (
    <Card>
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{expText}</Card.Title>
        <Card.Text>
          <ul>
            {skill._knowledge.map((_knowledge) => (
              <li key={_knowledge.id}>{_knowledge.name}</li>
            ))}
          </ul>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default SkillsRect;
