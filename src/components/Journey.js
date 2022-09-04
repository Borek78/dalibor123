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
            <p>
              This page lists my projects that I have created. My first projects
              are at the bottom. The latest are at the top. It will hopefully
              show you my coding journey.
            </p>
            <div className="red-box"> </div>
            <h2>HOW IT STARTED </h2>
            <p>
              I am a Buddhist enthusiast. At the beginning of my journey, I
              created a few websites for my Buddhist activities.
            </p>
            <p>
              In 2015 I created this simple website for my Buddhist publishing
              project Dharmazdarma.cz. In 2020 I created the first website for
              my new Buddhist project - Pandita.cz. I made it with Wordpress and
              that website in not live anymore.
            </p>
            <a className="button-projects" href="d">
              DHARMAZDAMA
            </a>
            <p>
              I also needed a blog. But I did not like Wordpress and I decided
              to use Jekyll – a popular static site generator.
            </p>
            <a className="button-projects" href="d">
              HOW TO CREATE PANDITA
            </a>
            <p>
              Later I created a new version of my Pandita.cz website. But I did
              not want to use Jekyll because the installation (all the Ruby
              Gems) can be tricky and the build time could be just too long for
              bigger websites. Eventually I decided to use HUGO – the fastest
              static site generator.
            </p>
            <a className="button-projects" href="d">
              PANDITA CZ
            </a>
            <p>
              At this point I realized I like coding and I started to think
              about making a living off it.
            </p>
            <div className="red-box"> </div>
            <h2>LEARNING JAVASCRIPT </h2>
            <p>
              I tried some tutorials on Javascript but I did not like it.
              Instead, my fouvourite method of learning was to follow other
              people creating a project.
            </p>
            <p>
              The first project that I created (copied) was the paper rock
              scissors game by Dev Ed. PAPER SCISSORS ROCK I was coding along
              and used resources like W3schools to reasearch the syntax that I
              did not know. When I was finished with it, I created (copied) the
              project again, and again … until I thoroughly understood
              everything. A that became my method of learning.
            </p>
            <p>
              The second project that I used for my JS learning was the Virtual
              Keyboard created by DOM.
            </p>

            <a className="button-projects" href="d">
              VIRTUAL KEYBOARD
            </a>
            <p>
              It is a very difficult project and again, it took my more than a
              month to finish it. There were a few chalanging concept that I had
              to grasp: the keyword THIS, document fragment, and functions as
              object property. The good part was that I have learned something
              about Object Oriented Programming (OOP). At this piont I felt
              confident with Javascript and decided to learn React.
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
