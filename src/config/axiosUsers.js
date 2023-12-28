import axios from "axios";

const urlApi = "http://localhost:4000/api/";

export const axiosUsers = axios.create({
  baseURL: urlApi,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerRequest = async (user) =>axiosUsers.post(`register`, user);

export const loginRequest = async (user) => axiosUsers.post(`login`, user);

export const logoutRequest = async () => axiosUsers.post(`logout`);
