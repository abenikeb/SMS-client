import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import * as authAction from "../../store/action/index";

import Form from "../../components/Form/Form";
import WithRouter from "../../hoc/WithRouter/WithRouter";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./Login.css";

class Login extends Form {
  schema = {
    tel: Joi.string().required().label("Tel No"),
    password: Joi.string().required().label("Password"),
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.data !== this.props.data) {
  //     console.log("componentDidUpdateFALSE");
  //     return false;
  //   } else {
  //     console.log("componentDidUpdateTRUE");
  //     return true;
  //   }
  // }

  handleBackAction = () => {
    this.props.navigate("/customers");
  };

  componentDidUpdateyy = () => {
    console.log("CMD_IP", this.props.error);
    if (this.props.error === {} && this.props.errors === {}) {
      window.location = "/";
      console.log("LL", this.props.error);
      toast("Successfuly Login");
    }
  };

  doSubmit = async () => {
    try {
      this.props.onLoginUser(this.props.data);
      // window.location = "/";

      // toast("Successfuly Login");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let error = { ...this.props.error };
        error.tel = "Invalid tel no or password";
        this.setState({ error });
      }
    }
  };

  render() {
    this.componentDidUpdateyy();
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
    return (
      <Auxiliary>
        <section className="login-container">
          <div className="card-container">
            <div className="card-body">
              <h1>Login Form</h1>
              {form}
            </div>
          </div>
        </section>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
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

export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(Login));
