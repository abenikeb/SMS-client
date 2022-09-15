import http from "./httpServices";
import jwtDecode from "jwt-decode";
const apiEndPoint = "http://localhost:5000/api";

let apiURL = apiEndPoint + "/user";

const token = "token";

http.setJwt(localStorage.getItem(token));

export const login = async (state) => {
  const { data: jwt } = await http.post(`${apiURL}/login`, state);

  localStorage.setItem(token, jwt);

  return jwt;
};

export const loginWithJwt = async (jwt) => {
  localStorage.setItem(token, jwt);
};

export const logout = async () => {
  localStorage.removeItem(token);
};

export const getJwt = async () => {
  localStorage.getItem(token);
};

export const getUserData = async () => {
  try {
    return jwtDecode(localStorage.getItem(token));
  } catch (error) {
    return null;
  }
};

export default {
  login,
  loginWithJwt,
  logout,
  getJwt,
  getUserData,
};
