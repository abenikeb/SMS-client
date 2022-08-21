import React, { Component } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";
import Joi from "joi-browser";

class Form extends Component {
  state = {};

  validateInput = (target) => {
    // key value pares
    let err = Joi.validate(
      { [target.name]: target.value },
      { [target.name]: this.schema[target.name] }
    );

    return err;
  };

  handleChange = ({ target }) => {
    let inputErr = this.validateInput(target);
    let errors = { ...this.state.error };
    inputErr.error !== null
      ? (errors[target.name] = inputErr.error.details[0].message)
      : delete errors[target.name];

    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data, error: errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    return error != null ? error : {};
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    const error = this.validate();
    const errCount = Object.keys(error).length;
    if (errCount > 0) {
      for (let err of error.details) {
        errors[err.path[0]] = err.message;
      }
    }

    this.setState({ error: errors });

    if (errCount > 0) return;

    this.doSubmit();
  };

  renderInput = (label, name) => {
    const { data, error } = this.state;
    return (
      <Input
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  };

  renderSelect = (label, name, categories) => {
    const { data, error } = this.state;
    return (
      <Select
        label={label}
        name={name}
        options={categories}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
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
