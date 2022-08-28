import "./Intro.css";
import { useEffect } from "react";
import { sleep } from "../help/sleep";

const Intro = () => {
  useEffect(() => {
    const one = document.querySelector(".intro-container span:first-child");
    const two = document.querySelector(".intro-container span:nth-child(2)");
    const three = document.querySelector(".intro-container span:nth-child(3)");
    const four = document.querySelector(".intro-container span:nth-child(4)");
    const five = document.querySelector(".intro-container span:nth-child(5)");
    const six = document.querySelector(".intro-container span:nth-child(6)");
    const seven = document.querySelector(".intro-container span:nth-child(7)");
    const eight = document.querySelector(".intro-container span:nth-child(8)");
    const nine = document.querySelector(".intro-container span:nth-child(9)");
    const ten = document.querySelector(".intro-container span:nth-child(10)");
    const eleven = document.querySelector(
      ".intro-container span:nth-child(11)"
    );
    const twelve = document.querySelector(
      ".intro-container span:nth-child(12)"
    );
    const threeTeen = document.querySelector(
      ".intro-container span:nth-child(13)"
    );
    const fourTeen = document.querySelector(
      ".intro-container span:nth-child(14)"
    );
    const fiveTeen = document.querySelector(
      ".intro-container span:nth-child(15)"
    );
    const sixTeen = document.querySelector(
      ".intro-container span:nth-child(16)"
    );
    const sevenTeen = document.querySelector(
      ".intro-container span:nth-child(17)"
    );
    const eigthTeen = document.querySelector(
      ".intro-container span:nth-child(18)"
    );
    const nineTeen = document.querySelector(
      ".intro-container span:nth-child(19)"
    );

    async function generateIntro() {
      one.classList.add("display-inline");
      await sleep(500);
      two.classList.add("display-inline");
      await sleep(500);
      three.classList.add("display-inline");
      await sleep(500);
      four.classList.add("display-inline");
      await sleep(500);
      five.classList.add("display-inline");
      await sleep(500);
      six.classList.add("display-inline");
      await sleep(500);
      seven.classList.add("display-inline");
      await sleep(500);
      eight.classList.add("display-inline");
      await sleep(500);
      nine.classList.add("display-inline");
      await sleep(500);
      ten.classList.add("display-inline");
      await sleep(500);
      eleven.classList.add("display-inline");
      await sleep(500);
      twelve.classList.add("display-inline");
      await sleep(500);
      threeTeen.classList.add("display-inline");
      await sleep(500);
      fourTeen.classList.add("display-inline");
      await sleep(500);
      fiveTeen.classList.add("display-inline");
      await sleep(500);
      sixTeen.classList.add("display-inline");
      await sleep(500);
      sevenTeen.classList.add("display-inline");
      await sleep(500);
      eigthTeen.classList.add("display-inline");

      await sleep(1500);

      eigthTeen.classList.remove("display-inline");
      await sleep(500);
      sevenTeen.classList.remove("display-inline");
      await sleep(500);
      sixTeen.classList.remove("display-inline");
      await sleep(500);
      fiveTeen.classList.remove("display-inline");
      await sleep(500);
      fourTeen.classList.remove("display-inline");
      await sleep(500);
      threeTeen.classList.remove("display-inline");
      await sleep(500);
      twelve.classList.remove("display-inline");
      await sleep(500);
      eleven.classList.remove("display-inline");
      await sleep(500);
      ten.classList.remove("display-inline");
      await sleep(500);
      nine.classList.remove("display-inline");
      await sleep(500);
      eight.classList.remove("display-inline");
      await sleep(500);
    }

    generateIntro();
  });

  return (
    <div className="intro-container">
      <span>D</span>
      <span>A</span>
      <span>L</span>
      <span>I</span>
      <span>B</span>
      <span>O</span>
      <span>R</span>

      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>.</span>

      <span>C</span>
      <span>O</span>
      <span>M</span>
      <span>""</span>
      <span>?</span>
      <span>?</span>
      <span>?</span>
    </div>
  );
};

export default Intro;
