import axios from "axios";

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
};
