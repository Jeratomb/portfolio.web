import React, { Suspense, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useErrorBoundary } from "react-error-boundary";

export const GetListOfProject = () => {
  const [projectItems, setProjectItems] = useState([]);
  const { showBoundary } = useErrorBoundary();
  const [hasError, setHasError] = useState(false);
  const [reload, setReload] = useState(false);
  console.log(reload);
  useEffect(() => {
    fetch("http://localhost:5278/project")
      .then((response) => response.json())
      .then((data) => setProjectItems(data))
      .then(setReload(false))
      .catch(
        {
        (error) => setHasError(true),
showBoundary(error)
      }
        );
  }, [reload]);
 
  // useEffect(() => {
  //     const fetchItems = async () => {
  //         try {
  //             const items = await fetcher();
  //             console.log("items" + items);
  //             setProjectItems(items);
  //             console.log("items" + items);
  //         } catch (err) {
  //             showBoundary(err);
  //             setHasError(true);
  //         }
  //     };
  //     fetchItems();
  // }, []);

  return (
    <>
      <button onClick={() => setReload(true)}>RELOAD</button>
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
  );
};
export default GetListOfProject;
