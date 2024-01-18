import "./Home.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

import Footer from "./Footer";
import Button from "./Button";
import Borek from "../images/Borek3.png";
import YouTubeEmbed from "../help/YouTubeEmbed";

const Home = () => {
  return (
    <div className="container">
      <HeaderDesktop />
      <HeaderMobile />

      <div className="content">
        <div className="inner-content">
          <div className="image-background">
            <img className="photo-box" src={Borek} alt="imgURL"></img>
          </div>
          <p>
            Ny name is Dalibor and I am React and C# .NET (very basic)
            developer. I am based in Pardubice, the Czech Republic. Presently I
            am looking for a job.
          </p>
          <div className="box">
            <h2>Skills </h2>
          </div>
          <p>
            Front-end: React, Typescript, Plastic SCM, OOP, Git(basics)
            <br />
            Back-end(very basic): C#, ASP.NET CORE
          </p>
          <div className="box">
            <h2>More me</h2>
          </div>
          <div className="about-me">
            <p>
              <span> Availability:</span> For many years, I suffered from
              chronic fatigue syndrome. Two years ago, I started to feel better.
              My is health is getting better every year now. However, I still
              prefer to limit my work schedule to not more than{" "}
              <span className="span-not-bold">15 hours a week.</span>
            </p>
            <p>
              <span>Additional skills:</span> I studied Economics and I
              specialized in regression analysis. I should be be able to recall
              many of its related concepts: correlation, normal distribution,
              ridge regression, and t-statistics.
            </p>
            <p>
              <span>English:</span> I am fluent in English. I lived in the
              United Kingdom for 18 months. In addition to that, for many years,
              I lived in English-speaking communities all over the world.
            </p>

            <div className="box">
              <h2>Contact</h2>
            </div>
            <p className="email">dalibor.pavlik@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
