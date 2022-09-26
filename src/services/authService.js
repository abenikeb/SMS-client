import http from "./httpServices";
import jwtDecode from "jwt-decode";
// const apiEndPoint = "http://localhost:5000/api";
const apiEndPoint = "https://sales-management-system-mvp.herokuapp.com/api";

let apiURL = apiEndPoint + "/user";

const token = "token";
const expirationDate = "expirationDate";
const user = "user";

http.setJwt(localStorage.getItem(token));

export const login = async (state) => {
  const { data: jwt } = await http.post(`${apiURL}/login`, state);

  const expirationDates = new Date(new Date().getTime() + jwt.expiresIn * 1000);
  const user_ = jwtDecode(jwt.token);

  localStorage.setItem(token, jwt.token);
  localStorage.setItem(expirationDate, expirationDates);
  localStorage.setItem(user, user_.id);

  http.setJwt(localStorage.getItem(token));

  return jwt;
};

export const loginWithJwt = async (jwt) => {
  localStorage.setItem(token, jwt);
};

export const logout = async () => {
  localStorage.removeItem(token);
  localStorage.removeItem(expirationDate);
  localStorage.removeItem(user);
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
