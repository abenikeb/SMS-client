import http from "./httpServices";
// import apiEndPoint from "../config.json";

const apiEndPoint = "http://localhost:5000/api";

let apiURL = apiEndPoint + "/user";

export const getCustomers = () => {
  return http.get(apiURL + "/get-customers");
};

export const getCustomer = (id) => {
  return http.get(`${apiURL}/get-customers-by-id/${id}`);
};

export const getCategories = () => {
  return http.get(`${apiURL}/get-user-categories`);
};

export const getCustomerPaymentType = () => {
  return http.get(`${apiURL}/find-payement-type-id`);
};

export const saveCustomer = (customer) => {
  if (customer.id) {
    let { id, ...newCustomer } = customer;
    return http.put(`${apiURL}/update-customer-profile/${id}`, newCustomer);
  }

  return http.post(`${apiURL}/create-customer`, customer);
};
