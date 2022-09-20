import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import * as authAction from "../../store/action/index";
import { Navigate } from "react-router-dom";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Form from "../../components/Form/Form";
import WithRouter from "../../hoc/WithRouter/WithRouter";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./Login.css";

class Login extends Form {
  schema = {
    tel: Joi.string().required().label("Tel No"),
    password: Joi.string().required().label("Password"),
  };

  handleBackAction = () => {
    this.props.navigate("/customers");
  };

  doSubmit = async () => {
    this.props.onLoginUser(this.props.data);
  };

  render() {
    let form = (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Tel", "tel")}
        {this.renderInput("Password", "password")}
        {this.renderButton("Login", "btn-primary-wrap")}
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }

    let authNavigate = null;

    if (this.props.isAuthenticate) {
      authNavigate = <Navigate to="/" />;
    }
    return (
      <section className="login-container">
        {authNavigate}
        <div className="card-container">
          <div className="card-body">
            <h1>Login Form</h1>
            {form}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    isAuthenticate: state.auth.token !== null,
    data: state.auth.data,
    error: state.auth.error,
    errors: state.auth.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: (userData) => {
      dispatch(authAction.loginUser(userData));
    },

    onHandleInputChange: (data, errors) => {
      dispatch(authAction.changeInputs(data, errors));
    },
    onHandleSubmitError: (error) => {
      dispatch(authAction.changeErrors(error));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouter(withErrorHandler(Login)));
