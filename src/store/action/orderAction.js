import * as actionTypes from "./actionTypes";
import {
  getCustomer,
  getCategories,
  GetProductWithPrice_ByCategory,
  getCustomerByCategory,
  createOrder,
} from "../../services/orderService";

export const EXCISE_PERCENT = 0.1;
export const VAT_PERCENT = 0.15;

export const initSubmitForm = () => {
  return {
    type: actionTypes.INIT_SUBMIT_FORM_ORDER,
  };
};

export const setForm = (order) => {
  return {
    type: actionTypes.SUCCESS_SUBMIT_FORM_ORDER,
    data: order,
  };
};

export const failSubmitForm = (errors) => {
  return {
    type: actionTypes.FAIL_SUBMIT_FORM_ORDER,
    errors: errors,
  };
};

// export const submitFormValidationError = (ex) => {
//   return {
//     type: actionTypes.SUBMIT_VALIDATION_ERROR,
//     ex: ex,
//   };
// };

export const succesSubmitForm_order = (data) => {
  console.log("data", data);
  // return async (dispatch) => {
  //   dispatch(initSubmitForm());
  //   try {
  //     const { data: order } = await createOrder(data);
  //     dispatch(setForm(order));
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       // dispatch(submitFormValidationError(ex));
  //       dispatch(failSubmitForm(ex.response.data.message));
  //     } else if (ex.response && ex.response.status === 401) {
  //       dispatch(failSubmitForm(ex.response.data.message));
  //     } else if (ex.response && ex.response.status === 404) {
  //       dispatch(failSubmitForm(ex.response.data.message));
  //     }
  //   }
  // };
};

export const changeInput_order_items = (data, PLACE_HOLEDR_VALUE) => {
  return {
    type: actionTypes.INPUT_CHANGE_FOR_ORDER_ITEMS,
    data: data,
    textInput: PLACE_HOLEDR_VALUE,
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
  console.log("error", error);
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
      dispatch(setProductWithPrice(result));
    } catch (ex) {
      console.log("getCategories-Err", ex);
    }
  };
};

export const calculateTotal_order = (itemsData) => {
  const netPrice = itemsData
    .map((item) => Number(item.qty) * Number(item.price))
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);

  const excise_tax = EXCISE_PERCENT * netPrice + netPrice;

  const add_vat = VAT_PERCENT * excise_tax;

  const gross_price = excise_tax + add_vat;

  console.log({ netPrice: netPrice });

  return {
    type: actionTypes.CALCULATE_TOTAL_ORDER,
    netPrice: netPrice.toFixed(2),
    excise_tax: excise_tax.toFixed(2),
    add_vat: add_vat.toFixed(2),
    gross_price: gross_price.toFixed(2),
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
