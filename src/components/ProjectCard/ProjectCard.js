import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <Card className="Card">
      <Card.Header>{project.name}</Card.Header>
      <Card.Body>
        <Card.Title>{project.id}</Card.Title>
        <Card.Text>
          {project.description}
          <ul>
            {project.usedSkills.map((knowledge) => (
              <li key={knowledge._id}>{knowledge._name}</li>
            ))}
          </ul>
          <ul>{project.creationDate}</ul>
          <ul>{project.lastUpdateDate}</ul>
        </Card.Text>
        <Button variant="primary">Check on Github</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
