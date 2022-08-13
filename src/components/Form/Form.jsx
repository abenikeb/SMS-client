import React, { Component } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

class Form extends Component {
  state = {
    data: {},
    error: null,
  };

  handleChange = ({ target }) => {
    // console.log(target);
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit();
  };

  renderInput = (label, name) => {
    const { data } = this.state;
    return (
      <Input
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect = (label) => {
    return (
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">{label}</span>
        </label>
        <select class="select select-bordered">
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
        </select>
      </div>
    );
  };

  renderButton = (label, btn_class) => {
    return (
      <div>
        <Button label={label} btn_class={btn_class} />
      </div>
    );
  };
}

export default Form;
