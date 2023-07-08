import React from "react";
import "../styles/Input.css";
const Input = (props) => {
  return (
    <div>
      <div class="form-control">
        <input
          class="input input-alt"
          placeholder={props.msg}
          required=""
          type={props.type}
          name={props.name}
        />
        <span class="input-border input-border-alt"></span>
      </div>
    </div>
  );
};

export default Input;
