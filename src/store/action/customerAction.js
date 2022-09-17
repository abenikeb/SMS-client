import * as actionTypes from "./actionTypes";
import {
  getCustomers,
  getCustomer,
  getCategories,
  getCustomerPaymentType,
  saveCustomer,
} from "../../services/customerServices";
import { toast } from "react-toastify";

export const initSubmitForm = () => {
  return {
    type: actionTypes.INIT_SUBMIT_FORM,
  };
};

export const setForm = (customer) => {
  return {
    type: actionTypes.SUCCESS_SUBMIT_FORM,
    data: customer,
  };
};

export const failSubmitForm = (errors) => {
  return {
    type: actionTypes.FAIL_SUBMIT_FORM,
    errors: errors,
  };
};

export const submitFormValidationError = (ex) => {
  return {
    type: actionTypes.SUBMIT_VALIDATION_ERROR,
    ex: ex,
  };
};

export const succesSubmitForm = (data) => {
  return async (dispatch) => {
    dispatch(initSubmitForm());
    try {
      const { data: customer } = await saveCustomer(data);
      dispatch(setForm(customer));
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        dispatch(submitFormValidationError(ex));
      } else if (ex.response && ex.response.status === 401) {
        dispatch(failSubmitForm(ex.response.data.message));
      } else if (ex.response && ex.response.status === 404) {
        dispatch(failSubmitForm(ex.response.data.message));
        // toast.error(ex.response.data.message);
        // this.props.navigate("/not-found");
      }
    }
  };
};

export const changeInput = (data, errors) => {
  return {
    type: actionTypes.CHANGE_INPUT,
    data: data,
    error: errors,
  };
};

export const changeError = (error) => {
  return {
    type: actionTypes.CHANGE_ERROR,
    error: error,
  };
};

export const setCustomers = (customers) => {
  return {
    type: actionTypes.INIT_CUSTOMERS,
    customers: customers,
  };
};

export const initCustomers = () => {
  return async (dispatch) => {
    try {
      const { data: customers } = await getCustomers();
      dispatch(setCustomers(customers));
    } catch (ex) {
      console.log("ERR-INIT-Customers", ex);
    }
  };
};

export const setCustomer = (customer) => {
  return {
    type: actionTypes.FETCH_CUSTOMER,
    customer: customer,
  };
};

export const fetchCustomer = (customerId) => {
  return async (dispatch) => {
    const { data: customer } = await getCustomer(customerId);
    dispatch(setCustomer(customer));
  };
};

export const setCategories = (categories) => {
  return {
    type: actionTypes.INIT_CATEGORIES,
    categories: categories,
  };
};

export const initCategories = () => {
  return async (dispatch) => {
    try {
      const { data: categories } = await getCategories();
      dispatch(setCategories(categories));
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
        // this.props.navigate("/");
      }
    }
  };
};

export const setPaymentType = (paymentType) => {
  return {
    type: actionTypes.INIT_PAYMENT,
    paymentType: paymentType,
  };
};

export const initPaymentType = () => {
  return async (dispatch) => {
    try {
      const { data: paymentType } = await getCustomerPaymentType();

      dispatch(setPaymentType(paymentType));
    } catch (ex) {
      console.log("ERR-PAYMENT_INIT", ex);
    }
  };
};

export const changePage = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    item: page,
  };
};

export const sortColumn = (column) => {
  return {
    type: actionTypes.SORT_COLUMN,
    column: column,
  };
};

export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};

export const setProperty = (customer) => {
  return {
    type: actionTypes.SET_PROPERTY,
    item: customer,
  };
};

export const searchQuery = (value) => {
  return {
    type: actionTypes.SEARCH_QUERY,
    value: value,
  };
};
