import * as actionTypes from "../action/actionTypes";

const initialState = {
  data: {
    product_sku: "",
    price: "",
    usersCategory: "",
  },
  error: {},
  errors: {},
  categories: [],
  loading: false,
  property: null,
  currentPage: 1,
  pageSize: 5,
  searchQuery: "",
  viewModal: false,
  isCategoryUpdate: false,
  sortColumn: { path: "name", order: "acs" },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.CHANGE_CATEGORY_INPUT:
    //   return {
    //     ...state,
    //     data: action.data,
    //     error: action.error,
    //   };

    // case actionTypes.CHANGE_CATEGORY_ERROR:
    //   return {
    //     ...state,
    //     error: action.error,
    //   };

    // case actionTypes.INIT_SUBMIT_CATEGORY_FORM:
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    // case actionTypes.FAIL_SUBMIT_CATEGORY_FORM:
    //   return {
    //     ...state,
    //     errors: action.errors,
    //     loading: false,
    //   };

    // case actionTypes.SUBMIT_CATEGORY_VALIDATION_ERROR:
    //   let error = { ...state.error };
    //   action.ex.response.data.map((res) => {
    //     let keyIndex = Object.keys(res.err)[0];
    //     error[res.property] = res.err[keyIndex];
    //   });

    //   return {
    //     ...state,
    //     error: error,
    //     loading: false,
    //   };

    // case actionTypes.SUCCESS_SUBMIT_CATEGORY_FORM:
    //   return {
    //     ...state,
    //     categories: state.categories.concat(action.data),
    //     isCategoryUpdate: true,
    //     loading: false,
    //   };

    case actionTypes.INIT_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        isCategoryUpdate: false,
      };

    // case actionTypes.GET_CATEGORY:
    //   return {
    //     ...state,
    //     data: {
    //       id: action.category.id,
    //       name: action.category.name,
    //       _desc: action.category._desc,
    //     },
    //   };

    // case actionTypes.CHANGE_CATEGORY_PAGE:
    //   return {
    //     ...state,
    //     currentPage: action.item,
    //   };

    // case actionTypes.SORT_CATEGORY_COLUMN:
    //   return {
    //     ...state,
    //     sortColumn: action.column,
    //   };

    // case actionTypes.OPEN_CATEGORY_MODAL:
    //   return {
    //     ...state,
    //     viewModal: true,
    //   };

    // case actionTypes.CLOSE_CATEGORY_MODAL:
    //   return {
    //     ...state,
    //     viewModal: false,
    //     property: null,
    //   };

    // case actionTypes.SET_CATEGORY_PROPERTY:
    //   return {
    //     ...state,
    //     property: action.item,
    //     viewModal: true,
    //   };

    // case actionTypes.SEARCH_CATEGORY_QUERY:
    //   return {
    //     ...state,
    //     searchQuery: action.value,
    //     currentPage: 1,
    //   };

    default:
      return state;
  }
};

export default reducer;
