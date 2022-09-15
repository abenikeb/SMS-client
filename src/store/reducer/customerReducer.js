import * as actionTypes from "../action/actionTypes";

const initialState = {
  customers: [],
  categories: [],
  paymentType: [],
  customer: null,
  loading: false,
  property: null,
  currentPage: 1,
  pageSize: 5,
  searchQuery: "",
  viewModal: false,
  sortColumn: { path: "name", order: "acs" },
  data: {
    first_name: "",
    last_name: "",
    category_id: "",
    business_licenses_no: "",
    plate_no: "",
    type_id: "",
    tel: "",
    city: "",
    email: "",
    territory: "",
  },
  error: {},
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_SUBMIT_FORM:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FAIL_SUBMIT_FORM:
      return {
        ...state,
        errors: action.errors,
        loading: false,
      };

    case actionTypes.CHANGE_INPUT:
      return {
        ...state,
        data: action.data,
        error: action.error,
      };

    case actionTypes.SUBMIT_VALIDATION_ERROR:
      let error = { ...state.error };
      action.ex.response.data.map((res) => {
        let keyIndex = Object.keys(res.err)[0];
        error[res.property] = res.err[keyIndex];
      });

      return {
        ...state,
        error: error,
        loading: false,
      };

    case actionTypes.CHANGE_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actionTypes.SUCCESS_SUBMIT_FORM:
      return {
        ...state,
        loading: false,
        customers: state.customers.concat(action.data),
      };

    case actionTypes.INIT_CUSTOMERS:
      return {
        ...state,
        customers: action.customers,
      };

    case actionTypes.INIT_CUSTOMERS:
      return {
        ...state,
        customers: action.customers,
      };

    case actionTypes.INIT_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case actionTypes.FETCH_CUSTOMER:
      return {
        ...state,
        data: {
          id: action.customer.id,
          first_name: action.customer.first_name,
          last_name: action.customer.last_name,
          category_id: action.customer.category_id,
          business_licenses_no: action.customer.business_licenses_no,
          plate_no: action.customer.plate_no,
          type_id: action.customer.type_id,
          tel: action.customer.tel,
          city: action.customer.city,
          email: action.customer.email,
          territory: action.customer.territory,
        },
      };

    case actionTypes.INIT_PAYMENT:
      return {
        ...state,
        paymentType: action.paymentType,
      };

    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.item,
      };

    case actionTypes.SORT_COLUMN:
      return {
        ...state,
        sortColumn: action.column,
      };

    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        viewModal: true,
      };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        viewModal: false,
        property: null,
      };

    case actionTypes.SET_PROPERTY:
      return {
        ...state,
        property: action.item,
        viewModal: true,
      };
    case actionTypes.SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.value,
        currentPage: 1,
      };
    default:
      return state;
  }
};

export default reducer;
