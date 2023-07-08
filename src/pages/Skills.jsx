import React from "react";
import "../styles/Skills.css";
import { useState , useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
  // let [toggle_item_first, setFirstToggle] = useState("active");
  // let [toggle_item_second, setSecondToggle] = useState("in-active");


  // let Togglefirst = () => {
  //   setFirstToggle(curr => curr=='active' ? 'active' : 'active')
  // }
  return (
    <section>
    <div className="skills" id="skills">
      <div className="skills_title">
        <h1>
          <span>M</span>y Skills
        </h1>
      </div>

      {/* <div className="toggle_bar">
        <div className="toggle_container">
          <div
            className="toggle_item"
            id={toggle_item_first}
            onClick={Togglefirst}
          >
            Hard skills
          </div>
          <div className="toggle_item" id={toggle_item_second}>
            Soft skills
          </div>
        </div>
      </div> */}

      <div className="skill-card">
        <div className="card" style={{backgroundColor : 'black',color : 'white'}} data-aos="zoom-in" data-aos-duration="1000">
            <h2>Frontend coding</h2>
            <p style={{color : 'rgb(184, 181, 181)'}}>Had a brief knowledge in Frontend coding with the frameworks like React,Bootstrap,Javascript,HTML,CSS,SCSS</p>
            <div className="skill_icon">
                <img src="images/react.png" alt="react" />
                <img src="images/sass.png" alt="sass" />
                <img src="images/Bootstrap.png" alt="boot" />
                <img src="images/html.png" alt="html" />
                <img src="images/css.png" alt="css" />
            </div>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-duration="1000">
        <h2>Backend coding</h2>
            <p>Had a brief knowledge in Backend coding with the frameworks and languages like nodejs,Javaservlets,Javascript,typescript</p>
            <div className="skill_icon">
                <img src="images/js.png" alt="react" />
                <img src="images/typescript.png" alt="sass" />
                <img src="images/auth0.png" alt="sass" />
                <img src="images/node.png" alt="boot" style={{objectFit : 'cover'}}/>
                <img src="images/java.png" alt="java" />
            </div>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-duration="1000"> 
        <h2>Database management</h2>
            <p>Had a knowledge in Database management with the relationals and non-relational datas and with ORM(Object Relational Mappings) - Mysql,mongoDb,Sequelize</p>
            <div className="skill_icon">
                <img src="images/mysql.png" alt="react" />
                <img src="images/mongodb.png" alt="sass" />
                <img src="images/sequelize.png" alt="boot" />
            </div>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-duration="1000">
        <h2>Api Development</h2>
            <p>Had a brief knowledge to develope and integrate the API with the applications - Nodejs,java,python</p>
            <div className="skill_icon">
            <img src="images/json.png" alt="sass" />
                <img src="images/node.png" alt="react" style={{objectFit : 'cover'}} />
                <img src="images/java.png" alt="sass" />
                <img src="images/python.webp" alt="boot" />
            </div>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-duration="1000">
        <h2>Ui/Ux Design</h2>
            <p>Had a knowledge to work on with UI design tools like figma, AdobeXd, balsamiq, Adobe illustrator</p>
            <div className="skill_icon">
                <img src="images/figma.svg" alt="react" />
                <img src="images/ai.png" alt="sass" />
                <img src="images/adobe.png" alt="boot" />
                <img src="images/balsamiq.png" alt="html" />
            </div>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-duration="1000">
        <h2>Tools Handling</h2>
            <p>Capable to work on with development tools like git,github,postman(Api testing tool)</p>
            <div className="skill_icon">
            <img src="images/git.png" alt="git" />
                <img src="images/github.png" alt="git" />
                <img src="images/postman.png" alt="postman" />
            </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
