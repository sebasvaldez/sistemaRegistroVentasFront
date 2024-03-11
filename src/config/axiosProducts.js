import { axiosConnection } from "./axiosConnection";

export const getProductsRequest = async ()=>  axiosConnection.get("/products");
