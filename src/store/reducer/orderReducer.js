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

    case actionTypes.INPUT_CHANGE_FOR_ORDER_ITEMS:
      // const state_data = state.data.items;
      // let qty = state_data[0];

      produce(state, (draftState) => {
        draftState.data.items[0].qty = action.data;
      });

    // console.log("...state.data.items", state_data);
    // return {

    // ...state,
    // data: {
    //   ...state.data,
    //   items: [
    //     ...state.data.items,
    //    state.data.items[0].map(item => {
    //     return {
    //       [item.qty]
    //     }
    //    })
    //   ],
    // },
    // error: action.error,
    // };

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
      };

    case actionTypes.SET_PRODUCT_PRICE_FOR_ORDER:
      let products = action.result.map((res) => res.product);
      //   console.log("PRO", product);
      return {
        ...state,
        data: {
          ...state.data,
          items: products.map((pro) => {
            return {
              product_id: pro.id,
              product_sku: pro.product_sku,
              price: pro.price,
              qty_promotion: 0,
              qty: 2,
            };
          }),
        },
      };

    // case actionTypes.FETCH_CUSTOMER:
    //   return {
    //     ...state,
    //     data: {
    //       id: action.customer.id,
    //       first_name: action.customer.first_name,
    //       last_name: action.customer.last_name,
    //       category_id: action.customer.category_id,
    //       business_licenses_no: action.customer.business_licenses_no,
    //       plate_no: action.customer.plate_no,
    //       type_id: action.customer.type_id,
    //       tel: action.customer.tel,
    //       city: action.customer.city,
    //       email: action.customer.email,
    //       territory: action.customer.territory,
    //     },
    //   };

    // case actionTypes.INIT_PAYMENT:
    //   return {
    //     ...state,
    //     paymentType: action.paymentType,
    //   };

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
