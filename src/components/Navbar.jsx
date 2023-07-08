import React from "react";
// import { ThemeContext } from "../context/Context";
// import { useContext } from "react";
import { Link } from "react-scroll";
import "../styles/Nav.css";
import ToggleSwitch from "../Reusable_components/ToggleSwitch";

const Navbar = () => {
  // let { Toggletheme } = useContext(ThemeContext);
  return (
    <div className="Navlinks">
      <nav>
        <ul>
          <li>
            <Link to="home" activeClass="active" smooth={true}>
              <i class="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link to="about" activeClass="active" smooth={true}>
              <i class="fa-solid fa-user" />
            </Link>
          </li>
          <li>
            <Link to="skills" activeClass="active" smooth={true}>
              <i class="fa-solid fa-lightbulb"></i>
            </Link>
          </li>
          <li>
            <Link to="projects" activeClass="active" smooth={true}>
              <i class="fa-solid fa-bug"></i>
            </Link>
          </li>
          {/* <li>
            <Link to="experience" activeClass="active" smooth={true}>
              <i class="fa-solid fa-briefcase"></i>
            </Link>
          </li> */}
          <li>
            <Link to="mail" activeClass="active" smooth={true} offset={-250}>
              <i class="fa-solid fa-envelope"></i>
            </Link>
          </li>
          {/* <li> */}
            {/* <i class="fa-solid fa-moon"></i> */}
            <ToggleSwitch />
          {/* </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
