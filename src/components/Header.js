import "./Header.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

const Header = () => {
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

  const width = window.innerWidth;
  console.log(width);

  return (
    <div className="header-container">
      <div className="header-content">
        <div>
          <div className="dalibor">Dalibor´s</div>
        </div>
        <div> </div>

        {width > 600 && <NavigationDesktop />}
        {width <= 600 && <NavigationMobile />}
      </div>
    </div>
  );
};

export default Header;
