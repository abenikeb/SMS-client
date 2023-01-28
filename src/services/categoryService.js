import http from "./httpServices";
import config from "../config.json";

// const apiEndPoint = "http://localhost:5000/api";
const apiEndPoint = config.apiEndPoint;
let apiURL = apiEndPoint + "/user";

export const getCategories = () => {
  return http.get(`${apiURL}/get-user-categories`);
};

export const getCategory = (id) => {
  return http.get(`${apiURL}/get-user-category-by-id/${id}`);
};

export const saveCategory = (Category) => {
  if (Category.id) {
    let { id, ...newCategory } = Category;
    return http.put(`${apiURL}/update-user-category/${id}`, newCategory);
  }

  return http.post(`${apiURL}/create-user-category`, Category);
};
