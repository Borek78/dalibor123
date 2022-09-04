import "./HeaderMobile.css";
import MenuSvg from "./svg/Menu";
import XSvg from "./svg/X";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const HeaderMobile = () => {
  const location = useLocation();

  //changing style on mobile link
  useEffect(() => {
    if (location.pathname === "/") {
      const homeMobileLink = document.querySelector(".home-mobile-link");
      const journeyMobileLink = document.querySelector(".journey-mobile-link");

      homeMobileLink.classList.add("active-page");
      journeyMobileLink.classList.remove("active-page");
    }

    if (location.pathname === "/Journey") {
      const homeMobileLink = document.querySelector(".home-mobile-link");
      const journeyMobileLink = document.querySelector(".journey-mobile-link");

      homeMobileLink.classList.remove("active-page");
      journeyMobileLink.classList.add("active-page");
    }
  });

  //mobile menu functionality
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const x = document.querySelector(".x-svg");
    const mobileHeaderLinks = document.querySelector(".header-mobile-links");

    //click menu
    menu.addEventListener("click", () => {
      menu.classList.add("display-none");
      x.classList.remove("display-none");
      mobileHeaderLinks.classList.add("show");
    });

    //click x
    x.addEventListener("click", () => {
      menu.classList.remove("display-none");
      x.classList.add("display-none");
      mobileHeaderLinks.classList.remove("show");
    });
  });

  return (
    <div className="header-mobile-wrapper">
      <div className="header-mobile-container">
        <div className="dalibor">Dalibor´s</div>
        <div></div>
        <MenuSvg />
        <XSvg />
      </div>
      <div className="header-mobile-links">
        <div className="first"></div>

        <Link to="/">
          <div className="second">
            <div className="home-mobile-link"> Home </div>
          </div>
        </Link>
        <Link to="/Journey">
          <div className="third">
            <div className="journey-mobile-link"> Journey</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMobile;
