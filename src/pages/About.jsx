import React from "react";
import "../styles/About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutStyle from "../Reusable_components/AboutStyle";
import { Link } from "react-scroll";
const About = () => {
  return (
    <section>
    <div id="about" className="about">
      <div className="about_title">
        <h1>
          <span>A</span>bout Me
        </h1>
      </div>
      <div className="about_container">
      <div className="about_content">
      {/* data-aos-duration="1000" */}
      {/* data-aos="fade-right" */}
        <p >
          Hey there I’m Santhosh, <span>Web Developer</span> with a passion for programming
          and a drive to create exceptional online experiences. Skilled in
          front-end and back-end development, I specialize in crafting dynamic
          websites that merge functionality with elegant design.<br></br> With a keen eye
          for detail and a dedication to continuous learning, I thrive in
          collaborative environments where I can bring innovative ideas to life.
          <br></br><span>Let's connect and build the next generation of web solutions together.</span>
        </p>
      </div>

      <div className="hire_me">
      {/* data-aos="fade-up" data-aos-duration="1000" */}
        <Link to="mail" smooth={true}><div className="hire">
            <p>Hire me!</p>
        </div></Link>
      </div>

      <div className="abt_footer">
      <div className="abt_footer_container">
        <div className="left_abt">
        <AboutStyle />
        </div>
        <div className="right_abt">
          <h2>"Let's build your web dreams into reality together."</h2>
        </div>
      </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default About;
