import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  let OpenUrl = (url) => {
    console.log("running");
    window.open(url, "_blank");
  };
  return (
    <section>
      <div id="projects" className="projects">
        <div className="project_container">
          <div className="projects_title">
            <h1>
              <span>M</span>y Projects
            </h1>
          </div>

          <div className="projects_card_container">
            <div
              className="project_card"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="img">
                <img src="images/auth_3.jpg" alt="auth" />
              </div>
              <div className="project_title">
                <h2>Authenticator</h2>
              </div>
              <div className="project_des">
                <p>
                  {" "}
                  web application using React, Express Node, and MySQL with a
                  focus on robust security. The application implemented a
                  one-time password (OTP) system to prevent unauthorized access
                  to user accounts.
                </p>
              </div>
              <div className="tech_img">
                <img src="images/react.png" alt="react" />
                <img
                  src="images/node.png"
                  alt="react"
                  style={{ objectFit: "cover" }}
                />
                <img
                  src="images/auth0.png"
                  alt="react"
                  style={{ objectFit: "cover" }}
                />
                <img src="images/mysql.png" alt="react" />
              </div>

              <div className="source_code">
                <div
                  className="source_btn"
                  onClick={() =>
                    OpenUrl(
                      "https://github.com/Santhosh-M0123/Hacktrix_UXON.git"
                    )
                  }
                >
                  <p>Get code</p>
                  <img src="images/github.png" alt="github" />
                </div>
              </div>
            </div>

            <div
              className="project_card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="img">
                <img src="images/short.png" alt="shortx" />
              </div>
              <div className="project_title">
                <h2>Url shortner</h2>
              </div>
              <div className="project_des">
                <p style={{ color: "rgb(195, 193, 193)" }}>
                  Build an Url shortner as like of tiny url with the techincal
                  stuff of react,express,node,mysql,JWT.
                </p>
              </div>
              <div className="tech_img">
                <img src="images/react.png" alt="react" />
                <img
                  src="images/node.png"
                  alt="node"
                  style={{ objectFit: "cover" }}
                />
                <img src="images/mysql.png" alt="mysql" />
              </div>
              <div className="source_code">
                <div
                  className="source_btn"
                  onClick={() =>
                    OpenUrl("https://github.com/Santhosh-M0123/Shortx.git")
                  }
                >
                  <p>Get code</p>
                  <img src="images/github.png" alt="github" />
                </div>
              </div>
            </div>

            <div
              className="project_card"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="img">
                <img src="images/dash_3.png" alt="shortx" />
              </div>
              <div className="project_title">
                <h2>Dashboard</h2>
              </div>
              <div className="project_des">
                <p>
                  Buid an Admin dashboard for a website with the functionalities
                  of user tracking,visual representation,user status monitoring.
                </p>
              </div>
              <div className="tech_img">
                <img src="images/react.png" alt="react" />
                <img
                  src="images/node.png"
                  alt="node"
                  style={{ objectFit: "cover" }}
                />
                <img src="images/mysql.png" alt="mysql" />
              </div>
              <div className="source_code">
                <div
                  className="source_btn"
                  onClick={() =>
                    OpenUrl("https://github.com/Santhosh-M0123/dashboard.git")
                  }
                >
                  <p>Get code</p>
                  <img src="images/github.png" alt="github" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
