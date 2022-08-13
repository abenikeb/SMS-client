import React from "react";
import "./Input.css";

const Input = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder="Type here"
          className="input-style"
        />
      </div>
    </div>
  );
};

export default Input;
