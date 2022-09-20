import * as actionTypes from "../action/actionTypes";

const initialState = {
  data: {
    tel: "",
    password: "",
  },
  token: null,
  userData: null,
  error: {},
  errors: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUTS:
      return {
        ...state,
        data: action.data,
        error: action.error,
      };

    case actionTypes.CHANGE_ERRORS:
      return {
        ...state,
        errors: action.error,
      };

    case actionTypes.LOGIN_USER:
      return {
        ...state,
        token: action.token,
        userData: action.user,
        loading: false,
      };

    case actionTypes.INIT_LOGIN_USER:
      return {
        ...state,
        errors: null,
        loading: true,
      };

    case actionTypes.FAIL_LOGIN_USER:
      let error = { ...state.error };
      error.tel = action.err;
      return {
        ...state,
        error: error,
        loading: false,
      };

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        userData: null,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
