import React from "react";
import Card from "react-bootstrap/Card";
import "./ProjectCard.css";
import Image from "../../assets/CodePicture.jpg";
import Button from "react-bootstrap/Button";

function ProjectCard({ project }) {
  return (
    // <Card style={{ width: "15rem" }} className="card d-flex flex-column Card">
    //   <Card.Header tag={project.id}>
    //     <Card.Title>{project.name}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
    //   </Card.Header>
    //   <Card.Body className="d-flex flex-column justify-content-end align-items-center">
    //     <Card.Text>
    //       {project.description}
    //       <ul>
    //         {project.usedSkills.map((skill) => (
    //           <li key={skill.id}>{skill.name}</li>
    //         ))}
    //       </ul>
    //       <ul>Created: {new Intl.DateTimeFormat('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'}).format(project.Createded)}</ul>
    //     </Card.Text>
    //     <Button
    //       variant="primary"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         window.open(
    //           "https://github.com/Jeratomb?tab=repositories",
    //           "_blank"
    //         );
    //       }}
    //     >
    //       Check on Github
    //     </Button>
    //   </Card.Body>
    // </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img className="image-container" variant="top" src={Image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text className="card-content">{project.description}</Card.Text>
        <Card.Text className="card-created">
          Created:{" "}
          {new Intl.DateTimeFormat("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }).format(project.Createded)}
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <Button
          variant="primary"
          className="card-button"
          href="https://github.com/Jeratomb?tab=repositories"
          target="blank"
        >
          Used Languages
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;
