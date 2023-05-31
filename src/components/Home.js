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
            <img className="photo-box" src={BorekXXXXXXXX} alt="imgURL"></img>
          </div>

          <p>
            Twenty years ago, there was a student of economics who was not happy
            with his studies. He wanted to study something more technical. He
            even went to visit his friend's father and asked him questions about
            his programming job. Eventually, life made him finish his studies in
            economics.
          </p>
          <p>
            That student was me. My name is<span> Dalibor Pavlik </span> and I
            am an amateur <span>React developer. </span> Presently, I am looking
            for my first job.
          </p>
          <div className="box">
            <h2>Flagship </h2>
          </div>
          <p>
            During my coding journey, I created many projects. But one of
            them—the Fruits and Vegetables e-shop—stands out. I consider it to
            be my portfolio website flagship. I have created it to show that I
            am capable of creating something more complex than just a blog or a
            portfolio page.
          </p>
          <Button />
          <div className="box">
            <h2>Video </h2>
          </div>
          <p>
            I think that my potential employers might want to know more about my
            personality. Therefore, I decided to create the following video. I
            speak about one of the features available on this website.
          </p>
          <div className="video">
            <YouTubeEmbed embedId="BpYbZYKLzxY" />
          </div>
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
              <span> Skills:</span> CSS, HTML, Javascript, React, Redux, Git
              (basics), Wordpress (basics), and OOP (very light).
            </p>
            <p>
              <span>Additional skills:</span> During my studies, I specialized
              in statistics and data analysis. I spent a lot of time working
              with regression analysis and many of its related concepts:
              correlation, normal distribution, ridge regression, and
              t-statistics. I should be able to refresh these skills.
            </p>
            <p>
              <span>Location:</span> Pardubice, Czech Republic (Prague is the
              capital).
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
