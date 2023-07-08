import React from "react";
import "../styles/ToggleSwitch.css";
import { ThemeContext } from "../context/Context";
import { useContext } from "react";
const ToggleSwitch = () => {
    let { Toggletheme } = useContext(ThemeContext);
  return (
    <div>
      <label class="ui-switch">
        <input type="checkbox" onClick={Toggletheme} />
        <div class="slider">
          <div class="circle"></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
