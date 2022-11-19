import http from "./httpServices";
// import apiEndPoint from "../config.json";

const apiEndPoint = "http://localhost:5000/api";
// const apiEndPoint = "https://sales-management-system-mvp.herokuapp.com/api";

let apiURL = apiEndPoint + "/product";

export const GetProductsWithPriceAndCategory = () => {
  return http.get(`${apiURL}/get-all-product-with-price-and-category`);
};

// export const getCategory = (id) => {
//   return http.get(`${apiURL}/get-user-category-by-id/${id}`);
// };

// export const saveCategory = (Category) => {
//   if (Category.id) {
//     let { id, ...newCategory } = Category;
//     return http.put(`${apiURL}/update-user-category/${id}`, newCategory);
//   }

//   return http.post(`${apiURL}/create-user-category`, Category);
// };
