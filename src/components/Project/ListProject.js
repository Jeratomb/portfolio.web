import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ListProject extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {

        projects: []
    }
    componentDidMount() {
        fetch("/Project")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({ projects: result });
                }
            )
            .catch(rejected => {
                console.log(rejected);
            })
    }
    render() {
        console.log(this.state.projects);
        return (
            <Container>
                <Row>
                    {
                        this.state.projects.map(proj => (
                            <Col xs={3}>
                                <Card className='Card'>
                                    <Card.Header>{proj.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{proj.id}</Card.Title>
                                        <Card.Text>
                                            {proj.description}
                                            <ul>
                                                {proj.creationDate}
                                            </ul>
                                            <ul>
                                                {proj.lastUpdateDate}
                                            </ul>
                                        </Card.Text>
                                        <Button variant="primary">Check on Github</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}
export default ListProject;