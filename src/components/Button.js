import "./Button.css";
import { Link } from "react-router-dom";

const Button = () => {
  const onMouse = () => {
    const colorButton = document.querySelector(".color-button");
    const brickButton = document.querySelector(".brick-button");

    brickButton.classList.add("display-none");
    colorButton.classList.add("display-block");
  };

  const outMouse = () => {
    const colorButton = document.querySelector(".color-button");
    const brickButton = document.querySelector(".brick-button");

    brickButton.classList.remove("display-none");
    colorButton.classList.remove("display-block");
    console.log("ahoj");
  };

  return (
    <a href="https://www.pandita.cz/">
      <div
        onMouseEnter={onMouse}
        onMouseLeave={outMouse}
        className="button-container"
      >
        <span className="color-button">
          <span className="red">F</span>
          <span className="red">r</span>
          <span className="green">u</span>
          <span className="red">i</span>
          <span className="orange">t</span>
          <span className="red">s</span>

          <span className="orange"> & </span>
          <span className="green">V</span>
          <span className="green">e</span>
          <span className="orange">g</span>
          <span className="green">e</span>
          <span className="green">t</span>
          <span className="green">a</span>
          <span className="orange">b</span>
          <span className="red">l</span>
          <span className="green">e</span>
          <span className="green">s</span>
        </span>

        <span className="brick-button">
          <span>F</span>
          <span>r</span>
          <span>u</span>
          <span>i</span>
          <span>t</span>
          <span>s</span>

          <span> & </span>
          <span>V</span>
          <span>e</span>
          <span>g</span>
          <span>e</span>
          <span>t</span>
          <span>a</span>
          <span>b</span>
          <span>l</span>
          <span>e</span>
          <span>s</span>
        </span>
      </div>
    </a>
  );
};

export default Button;
