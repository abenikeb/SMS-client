import * as actionTypes from "./actionTypes";
import {
  GetProductsWithPriceAndCategory,
  saveProduct,
} from "../../services/productService";

export const setProducts = (products) => {
  return {
    type: actionTypes.INIT_PRODUCT,
    products: products,
  };
};

export const initProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await GetProductsWithPriceAndCategory();
      dispatch(setProducts(products));
    } catch (ex) {
      console.log("getCategories-Err", ex);
    }
  };
};

export const initProductForm = () => {
  return {
    type: actionTypes.INIT_SUBMIT_PRODUCT_FORM,
  };
};

export const setProductForm = (product) => {
  return {
    type: actionTypes.SUCCESS_SUBMIT_PRODUCT_FORM,
    data: product,
  };
};

export const failSubmitForm = (errors) => {
  console.log({ errors: errors });
  return {
    type: actionTypes.FAIL_SUBMIT_PRODUCT_FORM,
    errors: errors,
  };
};

export const inputValidationError = (ex) => {
  return {
    type: actionTypes.SUBMIT_PRODUCT_VALIDATION_ERROR,
    ex: ex,
  };
};

export const succesSubmitProductForm = (data) => {
  return async (dispatch) => {
    dispatch(initProductForm());
    try {
      const { data: product } = await saveProduct(data);
      dispatch(setProductForm(product));
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        dispatch(inputValidationError(ex));
      } else if (ex.response && ex.response.status === 401) {
        dispatch(failSubmitForm(ex.response.data.message));
      } else if (ex.response && ex.response.status === 405) {
        dispatch(failSubmitForm(ex.response.data));
      } else if (ex.response && ex.response.status === 404) {
        dispatch(failSubmitForm(ex.response.data.message));
      }
    }
  };
};

export const inputChange_product = (data, errors) => {
  return {
    type: actionTypes.CHANGE_PRODUCT_INPUT,
    data: data,
    error: errors,
  };
};

// export const inputError_category = (error) => {
//   return {
//     type: actionTypes.CHANGE_CATEGORY_ERROR,
//     error: error,
//   };
// };

// export const setCategories = (customers) => {
//   return {
//     type: actionTypes.GET_CATEGORIES,
//     customers: customers,
//   };
// };

// export const initUserCategories = () => {
//   return async (dispatch) => {
//     try {
//       const { data: categories } = await getCategories();
//       dispatch(setCategories(categories));
//     } catch (ex) {
//       console.log("ERR-INIT-Categories", ex);
//     }
//   };
// };

// export const setCategory = (category) => {
//   return {
//     type: actionTypes.GET_CATEGORY,
//     category: category,
//   };
// };

// export const getUserCategory = (categoryId) => {
//   return async (dispatch) => {
//     const { data: category } = await getCategory(categoryId);
//     console.log("CATEGIORY", category);
//     dispatch(setCategory(category));
//   };
// };

export const changePage_product = (page) => {
  return {
    type: actionTypes.CHANGE_PRODUCT_PAGE,
    item: page,
  };
};

// export const sortColumn_category = (column) => {
//   return {
//     type: actionTypes.SORT_CATEGORY_COLUMN,
//     column: column,
//   };
// };

// export const openModal_category = () => {
//   return {
//     type: actionTypes.OPEN_CATEGORY_MODAL,
//   };
// };

// export const closeModal_category = () => {
//   return {
//     type: actionTypes.CLOSE_CATEGORY_MODAL,
//   };
// };

// export const setProperty_category = (customer) => {
//   return {
//     type: actionTypes.SET_CATEGORY_PROPERTY,
//     item: customer,
//   };
// };

// export const searchQuery_category = (value) => {
//   return {
//     type: actionTypes.SEARCH_CATEGORY_QUERY,
//     value: value,
//   };
// };
