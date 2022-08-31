import "./Journey.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import "./Journey.css";

const Journey = () => {
  return (
    <div className="journey-container">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="journey-content">
        This page is a list of projects that I have created. My first projects
        are at the bottom. The latest are at the top. It hopefully shows how I
        grew as a developer.
      </div>
      <Footer />
    </div>
  );
};

export default Journey;
