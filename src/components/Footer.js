import "./Footer.css";

import FacebookSvg from "./svg/Facebook";
import GitHubSvg from "./svg/GitHub";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons">
        <a href="https://www.facebook.com/robilad.kilvap">
          <FacebookSvg />
        </a>

        <a href="https://github.com/Borek78">
          <GitHubSvg />
        </a>
      </div>
    </div>
  );
};

export default Footer;
