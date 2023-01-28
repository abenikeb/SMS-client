import http from "./httpServices";
import config from "../config.json";

// const apiEndPoint = "http://localhost:5000/api";
const apiEndPoint = config.apiEndPoint;

let apiURLOrder = apiEndPoint + "/order";
let apiURLCustomer = apiEndPoint + "/user";

export const getCustomers = () => {
  return http.get(apiURLCustomer + "/get-customers");
};

export const getCategories = () => {
  return http.get(`${apiURLCustomer}/get-user-categories`);
};

export const getCustomerByCategory = (id) => {
  return http.get(`${apiURLCustomer}/get-customers-by-category-id/${id}`);
};

export const GetProductWithPrice_ByCategory = (id) => {
  return http.get(
    `${apiURLCustomer}/get-all-product-with-price-by-category-id/${id}`
  );
};

export const createOrder = (order) => {
  if (order.id) {
    let { id, ...newOrder } = order;
    return http.put(`${apiURLOrder}/update/${id}`, newOrder);
  }

  return http.post(`${apiURLOrder}/create`, order);
};

export const getCustomer = (id) => {
  return http.get(`${apiURLCustomer}/get-customers-by-id/${id}`);
};

export const getOrders = () => {
  return http.get(apiURLOrder + "/get");
};
