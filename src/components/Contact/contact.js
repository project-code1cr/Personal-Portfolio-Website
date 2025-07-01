import React, { useRef } from "react";
import "./contact.css";
import Codechef from "../../assets/codechef.png";
import GeeksforGeeks from "../../assets/gfg.png";
import Codeforces from "../../assets/codeforces.png";
import LeetCode from "../../assets/leet.png";

import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ynuj078", "template_5wmrasd", form.current, {
        publicKey: "KqX8Ol8syfT7Co8h4",
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Coding Profiles</h1>
        <p className="clientDisc">
          I have had the opportunity to grow my skills by actively participating
          on various coding platforms. Some of the notable ones I’ve contributed
          to include:
        </p>
        <div className="clientImgs">
          <div className="platforms">
            <a
              href="https://www.codechef.com/users/aman_gupta_24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Codechef} alt="CodeChef" className="clientImg" />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/amanguptoajr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GeeksforGeeks}
                alt="GeeksforGeeks"
                className="clientImg"
              />
            </a>
            <a
              href="https://codeforces.com/profile/amangupta125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Codeforces} alt="Codeforces" className="clientImg" />
            </a>
            <a
              href="https://leetcode.com/u/amangupta125er/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LeetCode} alt="LeetCode" className="clientImg" />
            </a>
          </div>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please Fill out the form below to discuss any work opportunity
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          {/* <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link'/>
                    <img src={TwitterIcon} alt='Twitter' className='link'/>
                    <img src={YoutubeIcon} alt='Youtube' className='link'/>
                    <img src={InstagramIcon} alt='Instagram' className='link'/>

                </div> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
