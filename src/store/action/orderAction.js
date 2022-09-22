import * as actionTypes from "./actionTypes";
import {
  getCustomer,
  getCategories,
  GetProductWithPrice_ByCategory,
  getCustomerByCategory,
  getCustomers,
} from "../../services/orderService";

// export const initSubmitForm = () => {
//   return {
//     type: actionTypes.INIT_SUBMIT_FORM,
//   };
// };

// export const setForm = (customer) => {
//   return {
//     type: actionTypes.SUCCESS_SUBMIT_FORM,
//     data: customer,
//   };
// };

// export const failSubmitForm = (errors) => {
//   return {
//     type: actionTypes.FAIL_SUBMIT_FORM,
//     errors: errors,
//   };
// };

// export const submitFormValidationError = (ex) => {
//   return {
//     type: actionTypes.SUBMIT_VALIDATION_ERROR,
//     ex: ex,
//   };
// };

// export const succesSubmitForm = (data) => {
//   return async (dispatch) => {
//     dispatch(initSubmitForm());
//     try {
//       const { data: customer } = await saveCustomer(data);
//       dispatch(setForm(customer));
//     } catch (ex) {
//       if (ex.response && ex.response.status === 400) {
//         dispatch(submitFormValidationError(ex));
//       } else if (ex.response && ex.response.status === 401) {
//         dispatch(failSubmitForm(ex.response.data.message));
//       } else if (ex.response && ex.response.status === 404) {
//         dispatch(failSubmitForm(ex.response.data.message));
//       }
//     }
//   };
// };
export const changeInput_order_items = (data) => {
  // console.log("Data", data);
  return {
    type: actionTypes.INPUT_CHANGE_FOR_ORDER_ITEMS,
    data: data,
  };
};

export const changeInput_order = (data, errors) => {
  return {
    type: actionTypes.INPUT_CHANGE_FOR_ORDER,
    data: data,
    error: errors,
  };
};

export const changeError_order = (error) => {
  return {
    type: actionTypes.CHANGE_ERROR_FOR_ORDER,
    error: error,
  };
};

export const setCustomers_order = (customers) => {
  return {
    type: actionTypes.SET_CUSTOMERS_FOR_ORDER,
    customers: customers,
  };
};

export const initCustomers_order = (id) => {
  return async (dispatch) => {
    try {
      const { data: customers } = await getCustomerByCategory(id);
      dispatch(setCustomers_order(customers));
    } catch (ex) {
      console.log("ERR-INIT-Customers", ex);
    }
  };
};

// export const setCustomer = (customer) => {
//   return {
//     type: actionTypes.FETCH_CUSTOMER,
//     customer: customer,
//   };
// };

// export const fetchCustomer = (customerId) => {
//   return async (dispatch) => {
//     const { data: customer } = await getCustomer(customerId);
//     dispatch(setCustomer(customer));
//   };
// };

export const setCategories = (categories) => {
  return {
    type: actionTypes.SET_CATEGORIES_FOR_ORDER,
    categories: categories,
  };
};

export const initCategories_order = () => {
  return async (dispatch) => {
    try {
      const { data: categories } = await getCategories();
      dispatch(setCategories(categories));
      // await getCustomerByCategory(categories);
    } catch (ex) {
      console.log("getCategories-Err", ex);
    }
  };
};

export const setProductWithPrice = (result) => {
  return {
    type: actionTypes.SET_PRODUCT_PRICE_FOR_ORDER,
    result: result,
  };
};

export const initProductWithPrice = (category_id) => {
  return async (dispatch) => {
    try {
      const { data: result } = await GetProductWithPrice_ByCategory(
        category_id
      );
      console.log("result", result);
      dispatch(setProductWithPrice(result));
    } catch (ex) {
      console.log("getCategories-Err", ex);
    }
  };
};

// export const changePage = (page) => {
//   return {
//     type: actionTypes.CHANGE_PAGE,
//     item: page,
//   };
// };

// export const sortColumn = (column) => {
//   return {
//     type: actionTypes.SORT_COLUMN,
//     column: column,
//   };
// };

// export const openModal = () => {
//   return {
//     type: actionTypes.OPEN_MODAL,
//   };
// };

// export const closeModal = () => {
//   return {
//     type: actionTypes.CLOSE_MODAL,
//   };
// };

// export const setProperty = (customer) => {
//   return {
//     type: actionTypes.SET_PROPERTY,
//     item: customer,
//   };
// };

// export const searchQuery = (value) => {
//   return {
//     type: actionTypes.SEARCH_QUERY,
//     value: value,
//   };
// };
