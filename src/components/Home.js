import "./Home.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

import Footer from "./Footer";
import Button from "./Button";
import Borek from "../images/Borek3.png";
import YouTubeEmbed from "../help/YouTubeEmbed";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="horizontal"></div>

      <div className="home-content">
        <img src={Borek} alt="imgURL"></img>
        <p>
          Twenty years ago there was a student of Economics who was not happy
          with his studies. He wanted to do something more technical. He even
          went to visit his friend´s father and asked him questions about his
          programming job. Eventualy life made him finish his studies in
          economics.
        </p>
        <p>
          That student was me. My name is<span> Dalibor Pavlik </span> and I am
          an amateur <span>React Developer. </span> Presently I am looking for
          my first job.
        </p>
        <div className="box">
          <h2>Flagship </h2>
        </div>
        <p>
          During my <Link to="/journey">coding journey</Link>, I created many
          projects. But the last one – the Fruits and Vegetables e-shop – stands
          out. I consider it to be my porfolio page flagship. I have created it
          to show that I am capable of creating something more complex than just
          a blog or a portfolio page.
        </p>
        <Button />
        <div className="box">
          <h2>Video </h2>
        </div>
        <p>
          I think that my potentional employers might want to know more about
          the person that created this website. Therefore, I decided to create
          the following video. It just shows how I speak. I do not thing that
          the content is special in any way. It is just something that I am
          comfortable to talk about.
        </p>
        <div className="video">
          <YouTubeEmbed embedId="CoxhNFlGOVg" />
        </div>
        <div className="box">
          <h2>More me</h2>
        </div>

        <div className="about-me">
          <p>
            <span> Skills:</span> CSS, HTML, Javascript, React, Redux, and OOP
            (very light)
          </p>
          <p>
            <span>Additional skills:</span> During my economics studies I was
            very well versed in statistics and data analysis. I used to
            specialize in regression analysis and many of the associated
            concepts: correlation, normal distribution, ridge regression,
            t-statistics. I should be able to refresh these skill very quickly.
          </p>
          <p>
            <span>Location:</span> Pardubice, Czech Republic (Prague is the
            capital)
          </p>
          <p>
            <span>English:</span> I am fluent in English. For 18 months I lived
            in Ipswich, United Kingdom. In addition to that, for many years I
            lived in english-speaking communities all over the world.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
