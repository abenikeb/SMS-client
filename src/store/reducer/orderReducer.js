import * as actionTypes from "../action/actionTypes";
import produce from "immer";

const initialState = {
  data: {
    category_id: "",
    customer_id: "",
    items: [],
  },
  error: {},
  errors: {},
  net_price: 0.0,
  add_vat: 0.0,
  excise_tax: 0.0,
  gross_price: 0.0,
  orders: [],

  customers: [],
  categories: [],
  product: [],
  category: null,
  customer: null,
  currentPage: 1,
  pageSize: 5,
  searchQuery: "",
  loading: false,
  viewModal: false,
  isOrderUpdate: false,
  sortColumn: { path: "name", order: "acs" },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE_FOR_ORDER:
      return {
        ...state,
        data: action.data,
        error: action.error,
      };

    case actionTypes.CHANGE_ERROR_FOR_ORDER:
      return {
        ...state,
        error: action.error,
      };

    case actionTypes.INPUT_CHANGE_FOR_ORDER_ITEMS:
      return produce(state, (draftState) => {
        draftState.data.items[action.textInput].qty = action.data;
      });

    case actionTypes.SET_CUSTOMERS_FOR_ORDER:
      let customers = action.customers.map((list) => list.customer);
      return {
        ...state,
        customers: customers,
        category: customers[0].categoryId,
        isOrderUpdate: false,
      };

    case actionTypes.SET_CATEGORIES_FOR_ORDER:
      return {
        ...state,
        categories: action.categories,
        isOrderUpdate: false,
      };

    case actionTypes.SET_PRODUCT_PRICE_FOR_ORDER:
      let products = action.result.map((res) => res.product);
      return {
        ...state,
        data: {
          ...state.data,
          items: products.map((pro) => {
            return {
              product_id: pro.id,
              product_sku: pro.product_sku,
              qty_promotion: 0,
              price: pro.price,
              qty_promotion: 0,
              qty: 0,
            };
          }),
        },
      };

    case actionTypes.CALCULATE_TOTAL_ORDER:
      const net_price = action.netPrice;
      const add_vat = action.add_vat;
      const excise_tax = action.excise_tax;
      const gross_price = action.gross_price;
      return {
        ...state,
        net_price: net_price,
        add_vat: add_vat,
        excise_tax: excise_tax,
        gross_price: gross_price,
      };

    case actionTypes.INIT_SUBMIT_FORM_ORDER:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.SUCCESS_SUBMIT_FORM_ORDER:
      return {
        ...state,
        orders: state.orders.concat(action.data),
        isOrderUpdate: true,
        loading: false,
      };

    case actionTypes.FAIL_SUBMIT_FORM_ORDER:
      return {
        ...state,
        errors: action.errors,
      };

    // case actionTypes.CHANGE_PAGE:
    //   return {
    //     ...state,
    //     currentPage: action.item,
    //   };

    // case actionTypes.SORT_COLUMN:
    //   return {
    //     ...state,
    //     sortColumn: action.column,
    //   };

    // case actionTypes.OPEN_MODAL:
    //   return {
    //     ...state,
    //     viewModal: true,
    //   };

    // case actionTypes.CLOSE_MODAL:
    //   return {
    //     ...state,
    //     viewModal: false,
    //     property: null,
    //   };

    // case actionTypes.SET_PROPERTY:
    //   return {
    //     ...state,
    //     property: action.item,
    //     viewModal: true,
    //   };

    // case actionTypes.SEARCH_QUERY:
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
