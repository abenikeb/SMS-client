import React from "react";
import "./select.css";

const Select = ({ label, name, options, value, onChange }) => {
  return (
    <div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">{label}</span>
        </label>
        <select
          class="input-style"
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
