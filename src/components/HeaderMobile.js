import "./HeaderMobile.css";
import MenuSvg from "./svg/Menu";
import XSvg from "./svg/X";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

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

    if (location.pathname === "/Projects") {
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

  //Inteligent Navbar
  let scroll_change = 0;
  let acumulated_change = 0;
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    const menu = document.querySelector(".menu");
    const x = document.querySelector(".x-svg");
    const header_mobile_links = document.querySelector(".header-mobile-links");
    const header_mobile_wrapper = document.querySelector(
      ".header-mobile-wrapper"
    );

    let currentScrollPos = window.pageYOffset;
    scroll_change = currentScrollPos - prevScrollPos;

    //changing acumulated_change
    if (scroll_change < 0) {
      acumulated_change = acumulated_change + scroll_change;
    } else {
      acumulated_change = 0;
    }

    //functionality
    if (acumulated_change < -250) {
      header_mobile_wrapper.classList.remove("hide-navbar");
    }

    if (scroll_change > 0 && currentScrollPos > 200) {
      header_mobile_wrapper.classList.add("hide-navbar");
      header_mobile_links.classList.remove("show");

      if (x) {
        x.classList.add("display-none");
      }
      menu.classList.remove("display-none");
    }

    if (currentScrollPos < 100) {
      header_mobile_wrapper.classList.remove("hide-navbar");
    }

    prevScrollPos = currentScrollPos;
  };

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
            <div className="link-wrapper">
              <div className="home-mobile-link"> Home </div>
            </div>
          </div>
        </Link>
        <Link to="/Projects">
          <div className="third">
            <div className="link-wrapper">
              <div className="journey-mobile-link">Projects</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMobile;
