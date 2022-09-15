import axios from "axios";

import { toast } from "react-toastify";

// axios.interceptors.response.use(null, (error) => {
//   const ExpectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status <= 500;
//   if (!ExpectedError) {
//     console.log("unexpected error", error);
//     toast("An expected error");
//   }

//   //pass control / expected error resposnse to catch
//   return Promise.reject(error);
// });

// const instance = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
  axios,
};
