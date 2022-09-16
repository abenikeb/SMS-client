import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import axios from "axios";
import { toast } from "react-toastify";

const withErrorHandler = (WrrapedComponent) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (err) => {
          const ExpectedError =
            err.response &&
            err.response.status >= 400 &&
            err.response.status < 500;
          if (!ExpectedError) {
            this.setState({ error: err.message });
          }

          return Promise.reject(err);
        }
      );
    }

    // componentWillUnmount() {
    //   axios.interceptors.request.eject(this.reqInterceptor);
    //   axios.interceptors.response.eject(this.resInterceptor);
    // }

    render() {
      return (
        <Auxiliary>
          {this.state.error && toast(this.state.error)}
          <WrrapedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
