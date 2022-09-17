import * as actionTypes from "./actionTypes";
import auth from "../../services/authService";
import jwtDecode from "jwt-decode";

const token = "token";
const expirationDate = "expirationDate";

export const initLogin = () => {
  return {
    type: actionTypes.INIT_LOGIN_USER,
  };
};

export const failLogin = (error) => {
  return {
    type: actionTypes.FAIL_LOGIN_USER,
    errors: error,
    loading: false,
  };
};

export const logoutUser = () => {
  auth.logout();
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logoutUser());
    }, expirationTime * 1000);
  };
};

export const setUserDate = (token, user, expiresIn) => {
  return {
    type: actionTypes.LOGIN_USER,
    token: token,
    user: user,
    expiresIn: expiresIn,
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(initLogin());
    try {
      const { token, expiresIn } = await auth.login(userData);
      const user = jwtDecode(token);
      dispatch(setUserDate(token, user, expiresIn));
      dispatch(checkAuthTimeOut(expiresIn));
    } catch (error) {
      dispatch(failLogin(error.response.data.message));
    }
  };
};

export const changeInputs = (data, errors) => {
  return {
    type: actionTypes.CHANGE_INPUT,
    data: data,
    error: errors,
  };
};

export const changeErrors = (error) => {
  return {
    type: actionTypes.CHANGE_ERROR,
    error: error,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token_ = localStorage.getItem(token);
    const user_ = localStorage.getItem("user");
    if (!token_) {
      dispatch(logoutUser());
    } else {
      const expDate = new Date(localStorage.getItem(expirationDate));
      if (expDate < new Date()) {
        dispatch(logoutUser());
      } else {
        dispatch(setUserDate(token_, user_, expDate));
        dispatch(
          checkAuthTimeOut(expDate.getTime() - new Date().getTime() / 1000)
        );
      }
    }
  };
};
