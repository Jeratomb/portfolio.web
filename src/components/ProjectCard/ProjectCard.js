import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <Card style={{ width: "15rem" }} className="card d-flex flex-column Card">
      <Card.Header>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-end align-items-center">
        {/* <Card.Text>
          {project.description}
          <ul>
            {project.usedSkills.map((knowledge) => (
              <li key={knowledge._id}>{knowledge._name}</li>
            ))}
          </ul>
          <ul>{project.creationDate}</ul>
          <ul>{project.lastUpdateDate}</ul>
        </Card.Text> */}
        <Button variant="primary">Check on Github</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
