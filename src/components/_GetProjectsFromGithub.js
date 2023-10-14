

export const GetProjectsFromGithub() {
    const [projectItems, setProjectItems] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/Jeratomb")
          .then((response) => response.json())
          .then((data) => setProjectItems(data))
          .catch((error) => setHasError(true));
      }, []);

    return (
        <>
          {hasError ? (
            <div>
              <h1>Sorry!</h1>
              <p>Data can´t be loaded.</p>
            </div>
          ) : (
            <Container>
              <Row>
                {projectItems.map((proj) => (
                  <Col xs={3}>
                    <Card className="Card">
                      <ProjectCard props={proj} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          )}
        </>
      );;
}

export default GetProjectsFromGithub ;