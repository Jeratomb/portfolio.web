import Auth from "../../pages/Auth/Auth";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="menuholder">
        <div className="tomenuholder">
          <div className="tomenu">
            <a href="/home" className="link-hoverable">
              Home
            </a>
            <a href="/projects" className="link-hoverable">
              Projects
            </a>
            <a href="/skills" className="link-hoverable">
              Skills
            </a>
            <Auth className="link-hoverable" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
