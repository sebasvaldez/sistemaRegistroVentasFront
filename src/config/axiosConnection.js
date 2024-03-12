import axios from "axios";

export const axiosConnection = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})


export const loginRequest = async (user) => axiosConnection.post("/login", user);
export const registerRequest = async (user) => axiosConnection.post("/register", user);
export const verifyTokenRequest = async () => axiosConnection.get("/verify");
export const logoutRequest = async ()=> axiosConnection.post("/logout");


