import "./HeaderDesktop.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import GitHubSvg from "./svg/GitHub";

const HeaderDesktop = () => {
  const location = useLocation();

  //changing style on link
  useEffect(() => {
    const homeLink = document.querySelector(".home");
    const journeyLink = document.querySelector(".learning");
    const jobsLink = document.querySelector(".jobs");

    if (location.pathname === "/") {
      homeLink.classList.add("active-page");
      journeyLink.classList.add("hover-link");

      homeLink.classList.remove("hover-link");
      journeyLink.classList.remove("active-page");
    }

    if (location.pathname === "/learning") {
      homeLink.classList.remove("active-page");
      journeyLink.classList.remove("hover-link");

      homeLink.classList.add("hover-link");
      journeyLink.classList.add("active-page");
    }

    if (location.pathname === "/jobs") {
      jobsLink.classList.remove("active-page");
      jobsLink.classList.remove("hover-link");

      jobsLink.classList.add("hover-link");
      jobsLink.classList.add("active-page");
    }
  });

  return (
    <div className="header-desktop-container">
      <div className="header-content">
        <div className="dalibor">Dalibor´s</div>

        <div></div>

        <div className="home">
          <Link to="/">Home </Link>
        </div>

        <div className="learning">
          <Link to="/learning">Learning </Link>
        </div>

        <div className="jobs">
          <Link to="/jobs">Jobs </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
