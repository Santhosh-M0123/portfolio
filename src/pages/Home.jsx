import React from 'react';
import "../styles/Home.css";
import Whatsapp from '../Reusable_components/Whatsapp';
const Home = () => {

  function SocialNav(url){
    window.open(url , "_blank")
  }
  return (
    <section>
    <div className='home' id='home'>
      <div className="home_container" data-aos="zoom-in" data-aos-duration="1000">
          <p id='itlaic'>Hello I,m</p>
          <div className="img">
            <img src="images/pic.png" alt="profile" id='profile' />
          </div>
          <div className="name">
              <h1>Santhosh</h1>
              <p>I am a enthusiastic Web Engineer</p>
          </div>

          {/* About achievements and events */}

          {/* <div className="abt_">
            <div className="abt_content">
              <span>
                1
              </span>
              <p>Year of <br></br>Internship experience</p>
            </div>
            <div className="abt_content">
              <span>
                20+
              </span>
              <p>Hackathon's <br></br>participated</p>
            </div>
            <div className="abt_content">
              <span>
                5+
              </span>
              <p>Award's<br/>winner</p>
            </div>
          </div> */}

          {/* social icons  */}
          <div className="social_icons">
            <div className="icons_container">
              {/* <img src="images/git.svg" alt="github" onClick={() => {SocialNav("https://github.com/Santhosh-M0123/")}}/> */}
            </div>
            <div className="icons_container" onClick={() => {SocialNav("https://www.linkedin.com/in/santhosh-m-")}}>
              <img src="images/linkedin.svg" alt="linkedin" />
            </div>
            <div className="icons_container" onClick={() => {SocialNav(`https://auth.geeksforgeeks.org/invite/ioqk3ttb/`)}}>
              <img src="images/geeksforgeeks.svg" style={{ width : "35px", height : "35px"}} alt="geeks" />
            </div>
            <div className="icons_container" onClick={() => {SocialNav("https://www.instagram.com/__mr.dusky__")}}>
              <img src="images/insta.svg" alt="Insta" />
            </div>
          </div>
          {/* resume section */}
          <div className='resume'>
            <a href='images/resume_2.jpg' download={true}><div className="resume_container">
              <p>Resume</p>
              <i class="fa-solid fa-arrow-down"></i>
            </div></a>

            <div className="contact_home">
              {/* <img src="images/WhatsApp.webp"  alt="whatsapp" onClick={() => {SocialNav('https://api.whatsapp.com/send?phone=918838144509', '_blank')}}/> */}
              {/* <Link to='mail' smooth={true}><img src="images/mail.svg"></img></Link> */}
              <Whatsapp Navigation = {SocialNav}/>
            </div>
          </div>

      </div>
    </div>
    </section>
  )
}

export default Home