import "./Learning.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

const Learning = () => {
  return (
    <div className="container">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="content">
        <div className="inner-content">
          <div className="journey-page">
            This page is about how I am learning to code.
            <div className="red-box"> </div>
            <h2>HOW IT STARTED </h2>
            <p>
              I am a Buddhist enthusiast and, in the beginning, I created a few
              websites for my Buddhist activities.
            </p>
            <ul>
              <li>
                <a href="https://borek78.github.io/how-to-create-pandita/">
                  How to create Pandita
                </a>
              </li>
              <li>
                <a href="http://www.pandita.cz">Pandita.cz</a>{" "}
              </li>
            </ul>
            <p>
              <span>How to create Pandita</span> is a blog that I created for my
              Pandita project. I used <a href="https://jekyllrb.com/">Jekyll</a>{" "}
              for this project. Jekyll is a popular static site generator.
            </p>
            <p>
              <span>Pandita.cz</span> is the second website that I created for
              my Pandita project. For this project, I used{" "}
              <a href="https://gohugo.io/">Hugo</a>, the fastest static site
              generator. I did not want to use Jekyll for this project because
              Jekyll installation (all the Ruby Gems) can be tricky and the
              build time can be very long for larger websites.
            </p>
            <div className="red-box"> </div>
            <h2>LEARNING JAVASCRIPT </h2>
            <p>
              My favorite method of learning is to follow other people creating
              projects. To learn Javascript project, I worked with these two
              projects:
            </p>
            <ul>
              <li>
                <a href="https://rock-paper-scissors-dev-ed.netlify.app/">
                  Rock Paper Scissors
                </a>
              </li>
              <li>
                <a href="https://codepen.io/dcode-software/pen/KYYKxP">
                  Virtual Keyboard
                </a>
              </li>
            </ul>
            <p>
              <span>Rock Paper Scissors</span> is a Javascript tutorial
              available on{" "}
              <a href="https://www.youtube.com/watch?v=qWPtKtYEsN4&t=1s">
                Dev Ed's YouTube channel.
              </a>{" "}
              It was the first project I used for my learning. I was coding
              along and used resources like{" "}
              <a href="https://www.w3schools.com/">W3schools</a> to research the
              syntax. When I was finished with it, I created (copied) the
              project again and again… until I was able to create the project by
              myself. And that became my learning method.
            </p>
            <p>
              <span>Virtual Keyboard</span> is a Javascript tutorial available
              on the{" "}
              <a href="https://www.youtube.com/watch?v=N3cq0BHDMOY">
                dcode YouTube channel.
              </a>{" "}
              Virtual Keyboard is a difficult project, but it introduced me to a
              few challenging concepts: the keyword THIS, document fragment, and
              Object Oriented Programming (OOP). At this point, I felt confident
              with Javascript and I decided to learn React.
            </p>
            <div className="red-box"> </div>
            <h2>LEARNING REACT </h2>
            <p>To learn React, I used the following three projects. </p>
            <ul>
              <li>
                <a href="https://todo-app-react-web-simplified.netlify.app/">
                  Learn React in 30 minutes (todo app)
                </a>
              </li>

              <li>
                <a href="https://contact-manager-react-dp-version.netlify.app/">
                  Contact Manager
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/watch?v=zrs7u6bdbUw">
                  Redux Tutorial – Beginner to Advanced
                </a>{" "}
                [video link only]
              </li>
            </ul>
            <p>
              <span>Learn React in 30 minutes (todo app)</span> is a React
              tutorial available on the{" "}
              <a href="https://www.youtube.com/watch?v=N3cq0BHDMOY">
                Web Dev Simplified
              </a>{" "}
              Youtube channel. This was my first React project, and I had to
              research the syntax a lot. In particular, the React hooks were
              very challenging to learn.
            </p>
            <p>
              <span>Contact Manager</span> is a tutorial available on{" "}
              <a href="https://www.youtube.com/watch?v=N3cq0BHDMOY">
                Dipesh Malvia´s
              </a>{" "}
              Youtube channel. It introduced me to React Router and some of the
              related hooks, like useNavigate. But the most challenging part
              here was the passing of properties and data between components.
            </p>
            <p>
              The project uses JSON server, which is usually used for local
              development only. I was looking for a quick way to place the
              project online. That is how I found{" "}
              <a href="https://my-json-server.typicode.com/">
                TYPICODE Fake Online REST server.
              </a>{" "}
              I have used it to place the server online.
            </p>
            <p>
              <span className="underline">Update:</span> The online version of
              the App may not work very well. When I deployed it, everything
              worked perfectly well. The problem is Typicode, which is not a
              very reliable service.
            </p>
            <p>
              <span>Redux tutorial – Beginners to Advanced</span> is nothing but
              a thorough introduction to Redux and Redux Toolkit. It is
              available on{" "}
              <a href="https://www.youtube.com/watch?v=zrs7u6bdbUw">
                freeCodeCamp's YouTube channel.
              </a>{" "}
              I used it as a basis for my Fruits and Vegetables e-shop.
            </p>
            <div className="red-box"> </div>
            <h2>My React Projects </h2>{" "}
            <p>I have created these two React projects:</p>
            <ul>
              <li>
                <a href="https://fruits-and-vegetables.netlify.app/">
                  Fruits and Vegetables e-shop
                </a>
              </li>
              <li>
                <a href="http://www.dalibor123.com">
                  Dalibor´s – my portfolio website
                </a>
              </li>
            </ul>
            <p>
              <span>Fruits and Vegetables e-shop</span> was my first non-guided
              React project. When I finished the{" "}
              <a href="d">Redux tutorial - Beginners to Advanced</a>, I wanted
              to challenge myself. I wanted to show that I am able to create a
              project that is more complex than a blog or simple website.
              Therefore, I decided to create an e-shop.
            </p>
            <p>
              The Redux for beginners to advanced tutorial is a one page
              project. I have restyled it and thus created the first (products)
              page of the e-shop. The rest of the e-shop is my work only.
            </p>
            <p>
              <span>Dalibor´s - my porfolio page</span> is the last React
              project I have created.
            </p>
            <div className="red-box"> </div>
            <h2>C# ASP.NET CORE </h2>I have created back-end for my React{" "}
            <a href="https://contact-manager-react-dp-version.netlify.app/">
              Contact Manager
            </a>{" "}
            project. The code is available in my{" "}
            <a href="https://contact-manager-react-dp-version.netlify.app/">
              Contact Manager
            </a>{" "}
            Github repo. It is only a very basic project. I have also watched
            and studied Patric God´s video on{" "}
            <a href="https://contact-manager-react-dp-version.netlify.app/">
              Database Relationships(1:1,1:n,n:n)
            </a>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Learning;
