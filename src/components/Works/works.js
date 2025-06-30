import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">MY Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and{" "}
      </span>
      <div className="worksImgs">
        {/* <img src= {Portfolio1} alt=''className='worksImg' />
            <img src= {Portfolio2} alt=''className='worksImg'/>
            <img src= {Portfolio3} alt=''className='worksImg'/>
            <img src= {Portfolio4} alt=''className='worksImg'/>
            <img src= {Portfolio5} alt=''className='worksImg'/>
            <img src= {Portfolio6} alt=''className='worksImg'/> */}

        <a
          href="https://project-code1cr.github.io/Real-Time-Chat-App/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio6} alt="" className="worksImg" />
        </a>

        <a
          href="https://project-code1cr.github.io/sorting-visualizer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio4} alt="" className="worksImg" />
        </a>

        <a
          href="https://project-code1cr.github.io/Personal-Portfolio-Website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio2} alt="" className="worksImg" />
        </a>

        <a
          href="https://project-code1cr.github.io/Currency-Converter-WebSite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio1} alt="" className="worksImg" />
        </a>

        <a
          href="https://project-code1cr.github.io/Rock-Paper-And-Scissor-Game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio3} alt="" className="worksImg" />
        </a>

        <a
          href="https://project-code1cr.github.io/Clock-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio5} alt="" className="worksImg" />
        </a>
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
