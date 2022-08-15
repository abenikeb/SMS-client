import React, { Component } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";

class Form extends Component {
  state = {
    data: {},
    error: null,
  };

  handleChange = ({ target }) => {
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

  renderSelect = (label, name, categories) => {
    const { data } = this.state;
    return (
      <Select
        label={label}
        name={name}
        options={categories}
        value={data[name]}
        onChange={this.handleChange}
      />
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
