import "./HeaderDesktop.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const HeaderDesktop = () => {
  const location = useLocation();

  //changing style on link
  useEffect(() => {
    if (location.pathname === "/") {
      const homeLink = document.querySelector(".home");
      const journeyLink = document.querySelector(".journey");

      homeLink.classList.add("active-page");
      journeyLink.classList.add("hover-link");

      homeLink.classList.remove("hover-link");
      journeyLink.classList.remove("active-page");
    }

    if (location.pathname === "/Journey") {
      const homeLink = document.querySelector(".home");
      const journeyLink = document.querySelector(".journey");

      homeLink.classList.remove("active-page");
      journeyLink.classList.remove("hover-link");

      homeLink.classList.add("hover-link");
      journeyLink.classList.add("active-page");
    }
  });

  return (
    <div className="header-desktop-container">
      <div className="header-content">
        <div>
          <div className="dalibor">Dalibor´s</div>
        </div>
        <div> </div>
        <div>
          <div className="home">
            <Link to="/">Home </Link>
          </div>
        </div>
        <div>
          <div className="journey">
            <Link to="/Journey">Journey </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
