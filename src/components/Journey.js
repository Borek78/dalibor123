import "./Journey.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import "./Journey.css";
import { AppBar } from "@mui/material";

const Journey = () => {
  return (
    <div className="container">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="content">
        <div className="inner-content">
          <div className="journey-page">
            <div className="red-box"> </div>
            <h2>HOW IT STARTED </h2>
            <p>
              I am a Buddhist enthusiast. At the beginning, I created a few
              websites for my Buddhist activities.
            </p>
            <ul>
              <li>
                <a href="http://www.dharmazdarma.cz">Dharmazdarma.cz</a>
              </li>
              <li>Pandita.cz (first version) - it is not live</li>
              <li>
                <a href="d">How to create Pandita</a>
              </li>
              <li>
                <a href="http://www.pandita.cz">Pandita.cz (second version)</a>{" "}
              </li>
            </ul>

            <p>
              <span>Dharmazdarma.cz </span>is a simple website that I have
              created in 2015 for my Buddhist publishing project.
            </p>

            <p>
              <span>Pandita.cz.</span> was a website I created for my second
              Buddhist project. I made it with Wordpress. However, later I
              replaced it with a different version and so it is not live
              anymore.
            </p>

            <p>
              <span>How to create Pandita</span> is a blog that I created for my
              Pandita project. I used <a href="d">Jekyll</a> for this project.
              Jekyll is a popular static site generator.
            </p>

            <p>
              <span>Pandita.cz (second version)</span> is, as you can imagine,
              the second version of my Pandita.cz website. I used another static
              site generator for this project - <a href="d">Hugo</a>. I did not
              want to use Jekyll for this project because the Jekyll
              installation (all the Ruby Gems) can be tricky and the build time
              can be very long for larger websites.
            </p>

            <div className="red-box"> </div>
            <h2>LEARNING JAVASCRIPT </h2>
            <p>
              My favourite method of learning was to follow other people
              creating a project. I worked with these two projects:
            </p>
            <ul>
              <li>
                <a href="http://www.dharmazdarma.cz">Rock Paper Scissors</a>
              </li>
              <li>
                <a href="http://www.dharmazdarma.cz">Virtual Keyboard</a>
              </li>
            </ul>
            <p>
              <span>Rock Paper Scissors</span> is a Javascript tutorial that is
              available on{" "}
              <a href="https://www.youtube.com/watch?v=qWPtKtYEsN4&t=1s">
                Dev Ed´s YouTube channel.
              </a>{" "}
              It was the first project that I used for my learning. I was coding
              along and used resources like{" "}
              <a href="https://www.w3schools.com/">W3schools</a> to reasearch
              the syntax. When I was finished with it, I created (copied) the
              project again, and again … until I understood each line of the
              code. A that became my method of learning.
            </p>
            <p>
              <span>Virtual Keyboard</span> is a Javascript tutorial that is
              available on{" "}
              <a href="https://www.youtube.com/watch?v=N3cq0BHDMOY">
                dcode YouTube channel.
              </a>{" "}
              It is a difficult project but it introduced me to a few chalenging
              concepts: the keyword THIS, document fragment, functions as object
              property and Object Oriented Programming (OOP). At this piont I
              felt confident with Javascript and I decided to learn React.
            </p>
            <div className="red-box"> </div>
            <h2>LEARNING REACT </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Journey;

// Virtual keyboard
// https://codepen.io/dcode-software/pen/KYYKxP
// https://www.youtube.com/watch?v=N3cq0BHDMOY

// Rock Scissors Paper
// https://www.youtube.com/watch?v=qWPtKtYEsN4
// https://github.com/developedbyed/rock-paper-scissor
// https://github.com/Borek78/rock-paper-scissor
// https://rock-paper-scissors-dev-ed.netlify.app/

// Todo App
// https://www.youtube.com/watch?v=hQAHSlTtcmY
// https://github.com/WebDevSimplified/Learn-React-In-30-Minutes
// https://todo-app-react-web-simplified.netlify.app/

// Contact Manager
// https://www.youtube.com/watch?v=QoJGKwo20is
// https://github.com/dmalvia/React_Tutorial_Contact_Manager_App
// https://github.com/Borek78/contact-manager-react
// https://contact-manager-react-dipesh-malvia.netlify.app/

// Fruits and Vegetables
// https://github.com/Borek78/fruits-and-vegetables
