import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProjectCard.css";


function ProjectCard({ project }) {
  return (
    <Card style={{ width: "15rem" }} className="card d-flex flex-column Card">
      <Card.Header tag={project.id}>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-end align-items-center">
        <Card.Text>
          {project.description}
          <ul>
            {project.usedSkills.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
          <ul>Created: {new Intl.DateTimeFormat('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'}).format(project.Createded)}</ul>
        </Card.Text>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://github.com/Jeratomb?tab=repositories",
              "_blank"
            );
          }}
        >
          Check on Github
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
