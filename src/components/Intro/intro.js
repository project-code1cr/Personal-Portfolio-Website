import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Aman Gupta</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a third-year Electronics and Communication Engineering (ECE)
          student at NIT Patna <br/> with a strong interest  in problem solving,
          competitive programming, and Web development. <br/>I have developed
          several hands-on  projects that reflect my passion for coding and <br/>
          building impactful applications. Always eager to learn and explore  new
          technologies.
        </p>

        <a
          href="https://drive.google.com/file/d/1RhQT3BCiUaVk3GdajeMq3N2URNaolFDR/view?usp=drivesdk "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={btnImg} alt="My Resume" className="btnImg" />
            Resume
          </button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
