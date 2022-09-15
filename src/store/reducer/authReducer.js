import * as actionTypes from "../action/actionTypes";

const initialState = {
  data: {
    tel: "",
    password: "",
  },
  userData: null,
  error: {},
  errors: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT:
      return {
        ...state,
        data: action.data,
        error: action.error,
      };

    case actionTypes.CHANGE_ERROR:
      return {
        ...state,
        errors: action.error,
      };

    case actionTypes.SUCCESS_SUBMIT_FORM:
      return {
        ...state,
        userData: action.user,
        loading: false,
      };

    case actionTypes.INIT_LOGIN_USER:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FAIL_LOGIN_USER:
      return {
        ...state,
        errors: action.errors,
        loading: false,
      };

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        userData: null,
      };

    default:
      return state;
  }
};

export default reducer;
