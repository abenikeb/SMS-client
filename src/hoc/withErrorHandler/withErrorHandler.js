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
        (error) => {
          const ExpectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500;
          if (!ExpectedError) {
            console.log("unexpected error", error);
            this.setState({ error: error.message });
          }

          // return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      console.log("ABeni", this.state.error);
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
