import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProjectCard.css';

function ProjectCard({props}) {
  return (
    <>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.id}</Card.Title>
        <Card.Text>
          {props.description}
          <ul>
            {props.creationDate}
          </ul>
          <ul>
            {props.lastUpdateDate}
          </ul>
        </Card.Text>
        <Button variant="primary">Check on Github</Button>
      </Card.Body>
    </>
  );
}

export default ProjectCard;