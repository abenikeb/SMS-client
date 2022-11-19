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

// export const saveCategory = (Product) => {
//   if (Product.id) {
//     let { id, ...newProduct } = Product;
//     return http.put(`${apiURL}/update-user-Product/${id}`, newProduct);
//   }

//   return http.post(`${apiURL}/create-user-Product`, Product);
// };

export const saveProduct = (Product) => {
  if (Product.id) {
    let { id, ...newProduct } = Product;
    return http.put(`${apiURL}/update/${id}`, newProduct);
  }

  return http.post(`${apiURL}/add`, Product);
};
