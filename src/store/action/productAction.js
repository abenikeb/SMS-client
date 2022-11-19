import * as actionTypes from "./actionTypes";
import { GetProductsWithPriceAndCategory } from "../../services/productService";

// export const initCategoryForm = () => {
//   return {
//     type: actionTypes.INIT_SUBMIT_CATEGORY_FORM,
//   };
// };

// export const setCategoryForm = (customer) => {
//   return {
//     type: actionTypes.SUCCESS_SUBMIT_CATEGORY_FORM,
//     data: customer,
//   };
// };

// export const failSubmitForm = (errors) => {
//   return {
//     type: actionTypes.FAIL_SUBMIT_CATEGORY_FORM,
//     errors: errors,
//   };
// };

// export const inputValidationError = (ex) => {
//   return {
//     type: actionTypes.SUBMIT_CATEGORY_VALIDATION_ERROR,
//     ex: ex,
//   };
// };

// export const succesSubmitCategoryForm = (data) => {
//   return async (dispatch) => {
//     dispatch(initCategoryForm());
//     try {
//       const { data: category } = await saveCategory(data);
//       dispatch(setCategoryForm(category));
//     } catch (ex) {
//       if (ex.response && ex.response.status === 400) {
//         dispatch(inputValidationError(ex));
//       } else if (ex.response && ex.response.status === 401) {
//         dispatch(failSubmitForm(ex.response.data.message));
//       } else if (ex.response && ex.response.status === 404) {
//         dispatch(failSubmitForm(ex.response.data.message));
//       }
//     }
//   };
// };

// export const inputChange_category = (data, errors) => {
//   return {
//     type: actionTypes.CHANGE_CATEGORY_INPUT,
//     data: data,
//     error: errors,
//   };
// };

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

// export const changePage_category = (page) => {
//   return {
//     type: actionTypes.CHANGE_CATEGORY_PAGE,
//     item: page,
//   };
// };

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
