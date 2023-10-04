import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProjectCard.css';

function ProjectCard() {
  return (
    <Card className='Card'>
      <Card.Header>Project</Card.Header>
      <Card.Body>
        <Card.Title>Creating Web API</Card.Title>
        <Card.Text>
          Used stack:
          <ul>
            .NET CORE 7
          </ul>
        </Card.Text>
        <Button variant="primary">Explore on Github</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;