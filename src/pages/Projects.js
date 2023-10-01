import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="App-main">
        <ul>
          <ProjectCard />
        </ul>
        <ul>
          <ProjectCard />
        </ul>
        <Footer />
      </div>
    </>
  );
}
