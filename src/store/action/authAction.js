import * as actionTypes from "./actionTypes";
import auth from "../../services/authService";
import jwtDecode from "jwt-decode";

// const token = "token";
// const expirationDate = "expirationDate";

export const changeInputs = (data, errors) => {
  return {
    type: actionTypes.CHANGE_INPUTS,
    data: data,
    error: errors,
  };
};

export const changeErrors = (error) => {
  return {
    type: actionTypes.CHANGE_ERRORS,
    error: error,
  };
};

export const initLogin = () => {
  return {
    type: actionTypes.INIT_LOGIN_USER,
  };
};

export const failLogin = (error) => {
  return {
    type: actionTypes.FAIL_LOGIN_USER,
    err: error,
  };
};

export const logoutUser = () => {
  auth.logout();
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const failSubmitLogin = (errors) => {
  return {
    type: actionTypes.FAIL_SUBMIT_FORM,
    errors: errors,
  };
};

export const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logoutUser());
    }, expirationTime * 1000);
  };
};

export const setUserDate = (token, user) => {
  return {
    type: actionTypes.LOGIN_USER,
    token: token,
    user: user,
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(initLogin());
    try {
      const { token, expiresIn } = await auth.login(userData);
      const user = jwtDecode(token);
      dispatch(setUserDate(token, user));
      dispatch(checkAuthTimeOut(expiresIn));
    } catch (err) {
      if (err.response && err.response.status === 400) {
        dispatch(failLogin(err.response.data.message));
      }
      // else if (err.response && err.response.status === 401) {
      //   dispatch(failSubmitLogin(err.response.data.message));
      // } else if (err.response && err.response.status === 404) {
      //   dispatch(failSubmitLogin(err.response.data.message));
      // }
    }
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token_ = localStorage.getItem("token");
    const user_ = localStorage.getItem("user");
    if (!token_) {
      dispatch(logoutUser());
    } else {
      const expDate = new Date(localStorage.getItem("expirationDate"));
      if (expDate < new Date()) {
        dispatch(logoutUser());
      } else {
        dispatch(setUserDate(token_, user_));
        dispatch(
          checkAuthTimeOut((expDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};
