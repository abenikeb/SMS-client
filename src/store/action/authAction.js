import * as actionTypes from "./actionTypes";
import auth from "../../services/authService";
import jwtDecode from "jwt-decode";

export const initLogin = () => {
  return {
    type: actionTypes.INIT_LOGIN_USER,
  };
};

export const failLogin = (error) => {
  return {
    type: actionTypes.FAIL_LOGIN_USER,
    errors: error,
  };
};

export const setUserDate = (user) => {
  return {
    type: actionTypes.SUCCESS_SUBMIT_FORM,
    user: user,
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(initLogin());
    try {
      const jwt = await auth.login(userData);
      const user = jwtDecode(jwt);
      dispatch(setUserDate(user));
    } catch (error) {
      dispatch(failLogin(error));
    }
  };
};

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
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
