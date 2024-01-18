import "./Learning.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";
import YouTubeEmbed from "../help/YouTubeEmbed";

const Jobs = () => {
  return (
    <div className="container">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="content">
        <div className="inner-content">
          <div className="journey-page">
            <div className="box" style={{ margin: 4 }}>
              <h2>BOLDBRICK</h2>
            </div>
            <p>
              Since January 2023, I worked part-time as Front developer for
              <a href=""> Boldbrick s.r.o.</a>
            </p>
            <p>
              I was working on an extension of Sharepoint 2019, a Document
              Management System developed by Microsoft. This was the first time
              I worked with a large code base. I have also learned Typescript on
              the job.
              <br />
            </p>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
