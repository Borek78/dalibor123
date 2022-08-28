import "./Footer.css";

import FacebookSvg from "./svg/Facebook";
import LinkedInSvg from "./svg/LinkedIn";
import GitHubSvg from "./svg/GitHub";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons">
        <FacebookSvg />
        <GitHubSvg />
        <LinkedInSvg />
      </div>
    </div>
  );
};

export default Footer;
